import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList'
import Note2 from '../../components/Note2'
var ROSLIB = require('roslib')
var ros = new ROSLIB.Ros({
  url: 'ws://192.168.178.63:9090'
})

const diag = new ROSLIB.Topic({ ros: ros, name: '/diagnostics', messageType: 'diagnostic_msgs/DiagnosticArray' })

function DiagClif () {
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
      const respList = (Object.entries(x.status[3]))
      setNodes(respList)
    })
  }, [])

  var first = nodes.map(item => (item[1]))
  var clifMap = (first[2])
  if (typeof clifMap !== 'undefined') {
    var clifSensors = clifMap.map(item => (<ItemList key={item.key} val0={item.key} val1={item.value} />))
  }
  return (
    <Note2 val1={clifSensors} val2='Cliff Sensor' />
  )
}
export default DiagClif
