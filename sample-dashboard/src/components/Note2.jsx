import React from 'react'

function Note2 (props) {
  return (
    <div className='card w-25 shadow mx-2 p-1 mt-3 mb-1 rounded float-left">'>
      <div className='card-body'>
        <li className='list-group-item list-group-item-dark text-center'> <p className='font-weight-bold h4'>{props.val2}{props.val3}</p></li>
        <ul className='list-group '>
          {props.val1}
        </ul>
      </div>
    </div>
  )
}

export default Note2
