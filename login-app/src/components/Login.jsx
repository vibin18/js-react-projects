import React from 'react'
import Input from './Input'
import InputData from '../data/LoginData.js'

function Login () {
  return (
    <div>
      <form className='form'>
        {InputData.map(x => { return (<Input key={x.id} type={x.type} placeholder={x.placeholder} />) })}
        <button type='submit'> Login</button>
      </form>
    </div>
  )
}
export default Login
