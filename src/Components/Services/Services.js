import React from 'react'
import './Services.css'
import {Link} from 'react-router-dom' 

import medicalconsultation from '../../images/medical-consultation.png'
import insurance from '../../images/insurance.png'


function Services() {
    return (
        <>
            <div className='services-container'>
                <h1 className='services-heading'>
                    A new way to:
                </h1>

                <div className='services-content'>
                
                <div className='section-1'>
                <div className='card-consultation'>
                    <div className='card-container'>
                        <img src={insurance} alt="medical insurance" />
                        <h3>Insurance</h3>
                        <Link className='card-link' to='#'>Read more...</Link>

                    </div>
                </div>

                </div>
                
                <div className='section-2'>
                <div className='card-consultation'>
                    <div className='card-container'>
                        <img src={medicalconsultation} alt="medical consultation" />
                        <h3>Medical Consultation</h3>
                        <Link className='card-link' to='#'>Read more...</Link>

                    </div>
                </div>

                <div className='services-content-details'>
                    <h2>Our best Services</h2>
                    <p>We are providing two main services, the first one is medical insuarance and the second one online consultancy.</p>
                </div>

                </div>
               
                

                </div>

               
            </div>
        </>
    )
}

export default Services