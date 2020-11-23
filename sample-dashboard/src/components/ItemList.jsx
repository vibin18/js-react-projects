import React from 'react'

function ItemList (props) {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <p>{props.val0}</p>
      <span className='badge badge-dark'><p className='h6'>{props.val1}   {props.val2}</p></span>
    </li>
  )
}

export default ItemList
