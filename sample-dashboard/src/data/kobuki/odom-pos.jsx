import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList'
import Note2 from '../../components/Note2'
var ROSLIB = require('roslib')
var ros = new ROSLIB.Ros({
  url: 'ws://192.168.178.63:9090'
})
const odomTopic = new ROSLIB.Topic({ ros: ros, name: '/odom', messageType: 'nav_msgs/Odometry' })

function OdomPose () {
  const [odom, setOdom] = useState([])

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
    odomTopic.subscribe(function (x) {
      const respList = (Object.entries(x))
      setOdom(respList)
    })
  }, [])
  const poseList = odom.map(item => (item[1]))
  console.log(poseList[0])
  const poseList1 = poseList[2]
  if (typeof poseList1 !== 'undefined') {
    const poseList2 = (Object.entries(poseList[2]))
    var poseList3 = poseList2.map(item => (item[1].position))
    var poseList4 = Object.entries(poseList3[0])
    var wallSensors = poseList4.map(item => (<ItemList key={item[0]} val0={item[0]} val1={item[1].toFixed(5)} />))
  }
  return (
    <Note2 val1={wallSensors} val2='Odom Pose' />
  )
}
export default OdomPose
