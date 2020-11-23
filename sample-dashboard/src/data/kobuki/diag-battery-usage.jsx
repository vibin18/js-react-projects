import React, { useState } from 'react'
import Note from '../../components/Note'
import axios from 'axios'
const apiUrl = 'http://localhost:2000/api/kobuki/battery/voltage'

function BatteryVolt () {
  const [volt, updateVolt] = useState([])
  axios.get(apiUrl)
    .then(response => {
      const respList = (Object.entries(response.data))
      updateVolt(respList)
    })
  const voltage = volt.map(item => {
    if (item.includes('Value')) {
      return item[1]
    }
  })
  return (
    <Note val1='Battery Voltage' val2={voltage} val3='V' />
  )
}
export default BatteryVolt
