import React from 'react'
import Input from './Input'
import registerData from '../data/RegisterData.js'

function Register () {
  return (
    <div>
      <form className='form'>
        {registerData.map(x => { return (<Input key={x.id} type={x.type} placeholder={x.placeholder} />) })}
        <button type='register'> Register</button>
      </form>
    </div>
  )
}
export default Register
