import React from 'react'

function NoteGroups (props) {
  return (
    <div className='card-group shadow p-1 mt-3 mb-1 bg-white rounded float-left">'>
      <h6>{props.val2}</h6>
      <div>{props.val1}</div>
    </div>
  )
}
export default NoteGroups
