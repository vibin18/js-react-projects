import React from 'react'
import Login from './Login'
import Greetings from './Greetings'
import Register from './Register'

var isLoggedIn = false

function App () {
  return (
    <div className='container'>
      <Greetings />
      {
        isLoggedIn ? <Login /> : <Register />
      }
    </div>
  )
}

export default App
