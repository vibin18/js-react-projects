import React from 'react'

function Note (props) {
  return (
    <div className='note'>
      <div className='card'>
        <div className='col-sm-12 col-md-4'>
          <div className='custom-column'>
            <div className='custom-column-header'>{props.val5}</div>
            <div className='custom-column-content'>
              <ul className='list-group'>
                <ul className='list-group-item'> {props.val1}</ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
