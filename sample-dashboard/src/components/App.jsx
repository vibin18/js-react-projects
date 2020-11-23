import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import Outside from '../data/Outside'
import OdomPose from '../data/kobuki/odom-pos'
// import BatteryVolt from '../data/kobuki/diag-battery-volt'
import DiagWheel from '../data/kobuki/diag-wheel'
import RoslibTest from '../data/kobuki/test-roslib'
import DiagBattery from '../data/kobuki/diag-battery'
import DiagWall from '../data/kobuki/diag-wall'
import DiagMotor from '../data/kobuki/diag-motor'
import DiagClif from '../data/kobuki/diag-clif'
import Firmware from '../data/kobuki/firmware-info'
// import Note from '../components/Note'

function App () {
  return (
    <div>
      <Headers />
      <div className='card-group mx-2'>
        <Outside />
        <RoslibTest />
        <Firmware />
        <OdomPose />
        <DiagBattery />
      </div>
      <div className='card-group mx-2'>
        <DiagWheel />
        <DiagWall />
        <DiagMotor />
        <DiagClif />
      </div>
      <Footer />
    </div>
  )
}
export default App
