import React, { useState } from 'react'
import Note from '../../components/Note'
import axios from 'axios'
const apiUrl = 'http://localhost:2000/api/kobuki/battery/percentage'

function BatteryPercentage () {
  const [percentage, updatePercentage] = useState([])
  axios.get(apiUrl)
    .then(response => {
      const respList = (Object.entries(response.data))
      updatePercentage(respList)
    })
  const Percentage = percentage.map(item => {
    if (item.includes('Value')) {
      return item[1]
    }
  })
  return (
    <Note val1='Battery Usage' val2={Percentage} val3='%' />
  )
}
export default BatteryPercentage
