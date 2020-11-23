// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import Note2 from '../components/Note2'
import ItemList from '../components/ItemList'
import axios from 'axios'
const apiUrl = 'http://192.168.178.70:8081/temp'

function Outside () {
  const [items, setItems] = useState([])
  axios.get(apiUrl)
    .then(response => {
      const ikey = (Object.entries(response.data))
      const withUnits = ikey.map(unit => {
        if (unit.includes('Temprature')) {
          unit.push('℃')
        } else if (unit.includes('Humidity')) {
          unit.push('%')
        } else {
          unit.push('mbar')
        }
        return unit
      })
      setItems(withUnits)
    })
  const weatherItems = items.map(item => (
    <ItemList key={item} val0={item[0]} val1={item[1]} val2={item[2]} />
  ))
  return (
    <Note2 val1={weatherItems} val2='Weather' />
  )
}
export default Outside
