import React from 'react'

import './OurServices.css'

import medicalconsultation from '../../images/medical-consultation.png'
import delivery from '../../images/delivery.jpg'
import vitals from '../../images/vitals-check.png'


function OurServices() {
    return (
        <>
            <div className='our-services-container'>
                <div className='our-services-txt'>
                    <h1 className='our-services-heading'>Our Services</h1>
                    <p className='our-services-heading'>Hello Doctor provides a wide range health services</p>
                </div>

                <div className='our-services-content'>
                    <div className='our-services-card'>

                        <div className='our-services-card-content'>
                            <h2 className='our-services-name'>Vitals Check</h2>
                        </div>

                        <div className='our-services-card-image'>
                            <img src={vitals} alt="vitals check" />
                        </div>
                    </div>

                    <div className='our-services-card'>

                        <div className='our-services-card-content'>
                            <h2 className='our-services-name'>Online Consultation</h2>
                            <div className='our-services-card-image'>
                                <img src={medicalconsultation} alt="doctor" />
                            </div>
                        </div>
                    </div>


                    <div className='our-services-card'>

                        <div className='our-services-card-content'>
                            <h2 className='our-services-name'>Medicine Delivery</h2>
                            <div className='our-services-card-image'>
                                <img src={delivery} alt="Image by macrovector_officialon Freepik" />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default OurServices