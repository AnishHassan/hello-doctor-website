import React from 'react'

import './Medicalteam.css'
import SliderMedTeam from './SliderMedTeam'
import SwipperCarousal from './SwipperCarousal'


function Medicalteam() {
  return (
    <>
    <div className='medical-team-container'>
        <h1 className='medical-team-heading'>About Our Medical</h1>
        <h2 className='medical-team-heading'>Our Special Doctor Team</h2>
        <p className='medical-team-heading'>We are providing best Doctor on one call consultation 24/7</p>

       <SwipperCarousal/>

    </div>
    </>
    
  )
}

export default Medicalteam