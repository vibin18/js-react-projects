import React from 'react'

const ProgressBar = (props) => {
  const { bgcolor, completed } = props
  const containerStyles = {
    height: 25,
    width: '90%',
    bottom: 100,
    backgroundColor: '#e0e0de',
    borderRadius: 10,
    margin: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'left'
  }

  const labelStyles = {
    padding: 100,
    margin: 1,
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold'
  }

  return (
    <div className='note1'>
      <div style={containerStyles}>

        <div style={fillerStyles}>
          <span style={labelStyles}>{`⚡${completed}%`}  </span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
