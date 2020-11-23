import React, { useState, useEffect } from 'react'
import Progress from '../../components/Progress'
var ROSLIB = require('roslib')
var ros = new ROSLIB.Ros({
  url: 'ws://192.168.178.63:9090'
})

const diag = new ROSLIB.Topic({ ros: ros, name: '/diagnostics', messageType: 'diagnostic_msgs/DiagnosticArray' })

function DiagBattery () {
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
  }, [])
  const percentage = nodes.map(item => {
    return (
      Math.round(item[1].value)
    )
  })
  const fill = '#51bd2d'
  return (
    // <div><NoteinNote val1={semi1} val5='Battery' /></div>
    <div>
      <Progress bgcolor={fill} completed={percentage[1]} />
    </div>
  )
}
export default DiagBattery
