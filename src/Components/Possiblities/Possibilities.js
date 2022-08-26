import React from 'react'

import ellipse from '../../images/ellipse.png'
import screen from '../../images/screen.png'

import './Possibilities.css'

function Possibilities() {
    return (
        <>
            <div className='possibilities-container'>

                <h1 className='possibilities-heading'> A world of Possibilities</h1>

                <div className='possibilities-container-content'>
                    <div className='elippse-section-1'>
                        <div className='elippse-section-1-img-1'>
                        <img src={ellipse} alt="ellipse" />

                        </div>
                        <div>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                        <div className='elippse-section-1-img-1'>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                    </div>

                    <div className='screen-section'>
                        <img src={screen} alt="screen hello doctor" />
                    </div>


                    <div className='elippse-section-2'>

                        <div className='elippse-section-1-img-2'>
                        <img src={ellipse} alt="ellipse" />
                        </div>
                        <div >
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                        <div className='elippse-section-1-img-2'>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                       
                    </div>
                </div>


            </div>
        </>
    )
}

export default Possibilities