import React, { useState } from 'react'
import NoteinNote from '../../components/NoteinNote'
import axios from 'axios'
const apiUrl = 'http://localhost:2000/api/kobuki/odom/twist'

function OdomTwist () {
  const [percentage, updatePercentage] = useState([])
  axios.get(apiUrl)
    .then(response => {
      const respList = (Object.entries(response.data.Twist.Linear))
      updatePercentage(respList)
    })
  const onlyPose = percentage
  const inCards = onlyPose.map(item => {
    return (<ul class='list-group-item' key={item[0]}>   {item[0]} : {item[1].toFixed(5)} </ul>)
  })
  return (
    <div><NoteinNote val1={inCards} val5='Twist' /></div>
  )
}
export default OdomTwist
