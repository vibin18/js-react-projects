import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList'
import Note2 from '../../components/Note2'
var ROSLIB = require('roslib')
var ros = new ROSLIB.Ros({
  url: 'ws://192.168.178.63:9090'
})

const diag = new ROSLIB.Topic({ ros: ros, name: '/diagnostics', messageType: 'diagnostic_msgs/DiagnosticArray' })

function RoslibTest () {
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
      const respList = (Object.entries(x.status[0].values))
      setNodes(respList)
    })
    // ros.on('data', handleMessage)
  }, [])

  const baterryItems = nodes.map(item => {
    return (
      <ItemList key={item[1].key} val0={item[1].key} val1={item[1].value} />
    )
  })
  return (
    <Note2 val1={baterryItems} val2='Power Status'/>
  )
}
export default RoslibTest
