import React, { useState } from 'react'

import ellipse from '../../images/ellipse.png'
import screen1 from '../../images/homescreen.png'
import screen2 from '../../images/ss1.png'
import screen3 from '../../images/DoctorShows.png'
import screen4 from '../../images/FitnessVideos.png'
import screen5 from '../../images/familymanage.png'
import screen6 from '../../images/VitalsHistory.png'



import './Possibilities.css'

function Possibilities() {

    const [optionClicked ,  setoptionClicked] = useState(1);
    
    const changeScreen = (value) => {
        console.log(value);
        setoptionClicked(value);
    }




    return (
        <>
            <div className='possibilities-container'>

                <h1 className='possibilities-heading'> A world of Possibilities</h1>

                <div className='possibilities-container-content'>
                    <div  className='elippse-section-1'>
                        <div onClick={()=>{changeScreen(1)}} className='elippse-section-1-img-1'>
                        <img src={ellipse} alt="ellipse" />

                        </div>
                        <div onClick={()=>{changeScreen(2)}} className='elippse-section-1-img'>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                        <div onClick={()=>{changeScreen(3)}} className='elippse-section-1-img-1'>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                    </div>

                    <div className='screen-section'>
                        <img className={optionClicked === 1 ? 'showScreen' : 'hideScreen'} src={screen1} alt="screen hello doctor" />
                        <img className={optionClicked === 2 ? 'showScreen' : 'hideScreen'} src={screen2} alt="screen hello doctor" />
                        <img className={optionClicked === 3 ? 'showScreen' : 'hideScreen'} src={screen3} alt="screen hello doctor" />
                        <img className={optionClicked === 4 ? 'showScreen' : 'hideScreen'} src={screen4} alt="screen hello doctor" />
                        <img className={optionClicked === 5 ? 'showScreen' : 'hideScreen'} src={screen5} alt="screen hello doctor" />
                        <img className={optionClicked === 6 ? 'showScreen' : 'hideScreen'} src={screen6} alt="screen hello doctor" />
                    </div>


                    <div className='elippse-section-2'>

                        <div onClick={()=>{changeScreen(4)}} className='elippse-section-1-img-2'>
                        <img src={ellipse} alt="ellipse" />
                        </div>
                        <div onClick={()=>{changeScreen(5)}} className='elippse-section-1-img'>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                        <div onClick={()=>{changeScreen(6)}}  className='elippse-section-1-img-2'>
                        <img src={ellipse}  alt="ellipse" />

                        </div>
                       
                    </div>
                </div>


            </div>
        </>
    )
}

export default Possibilities