import React from 'react'
const currentTime = new Date().getHours()

function Greetings () {
  return (
    currentTime > 12 ? <h1>Hello Good Evening! </h1> : <h1>Hello Good Morning! </h1> 
  )
}
export default Greetings
