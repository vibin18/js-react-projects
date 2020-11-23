import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList'
import Note2 from '../../components/Note2'
var ROSLIB = require('roslib')
var ros = new ROSLIB.Ros({
  url: 'ws://192.168.178.63:9090'
})

const diag = new ROSLIB.Topic({ ros: ros, name: '/mobile_base/version_info', messageType: 'kobuki_msgs/VersionInfo' })

function Firmware () {
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    ros.on('connection', function () {
      console.log('Connected to websocket server.')
    })
    ros.on('error', function (error) {
      console.log('Error connecting to websocket server: ', error)
    })
    ros.on('close', function () {
      console.log('Connection to websocket server closed.')
    })
    ros.on('data', function () {
      console.log('Message received.')
    })
    diag.subscribe(function (x) {
      const respList = (Object.entries(x))
      setNodes(respList)
    })
  }, [])
  var wheelSensors = nodes.map(item => (<ItemList key={item[0]} val0={item[0]} val1={item[1]} />))
  return (
    <Note2 val1={wheelSensors} val2='Firmware' />
  )
}
export default Firmware
