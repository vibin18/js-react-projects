import React from 'react'

function Note (props) {
  return (
    <div className='card w-70 shadow p-1 mt-3 mb-1 bg-white rounded">'>
      <div className='card-body'>
        <li className='list-group-item list-group-item-dark text-center'> <p className='font-weight-bold'>{props.val2}</p></li>
        <ul className='list-group'>
          {props.val1}
        </ul>
      </div>
    </div>
  )
}

export default Note