import React from 'react'

function ItemListColor (props) {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <p>{props.val0}</p>
      <span className={props.val1 === 'NO' ? 'badge badge-success' : 'badge badge-danger'}>
        <p className='h6'> {props.val1}</p>
        <p className='h6'> {props.val2}</p>
      </span>
    </li>
  )
}

export default ItemListColor
