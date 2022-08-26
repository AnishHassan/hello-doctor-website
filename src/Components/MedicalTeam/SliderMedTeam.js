import React from 'react'
import './SliderMedTeam.css'

import person1 from '../../images/person1.png'





function SliderMedTeam() {
    return (
        <>

            <div className='card'>
                <div className='image-content'>
                    <span className='overlay'></span>

                    <div className='card-image'>
                        <img src={person1} alt="doctor image" />
                    </div>
                </div>

                <div className='card-content'>
                    <h2 className='name'> Dr Ahmad</h2>
                    <p className='description'>Dermatologist, Cosmetologist
                    </p>
                    <p className='description'>
                        MBBS, FCPS (Dermatology)
                    </p>
                </div>
            </div>

        </>
    )
}

export default SliderMedTeam