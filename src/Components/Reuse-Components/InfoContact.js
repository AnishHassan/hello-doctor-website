import React from 'react'

import callicon from '../../images/call.png'
import timeicon from '../../images/time.png'
import msgicon from '../../images/msg.png'

function InfoContact() {
  return (
    <>
        <div className='info'>
                    <div className='info-item'>
                        <div className='info-img'>
                            <img src={callicon} alt="call-icon" />
                        </div>
                        <div className='info-content'>
                            <p>051-111-114-356</p>
                            <p>Call us</p>
                        </div>
                    </div>

                    <div className='info-item'>
                    <div className='info-img'>
                    <img src={timeicon} alt="call-icon"/>
                    </div>
                      <div className='info-content'>
                          <p>Mon-Sat (9am - 9pm)</p>
                          <p>Our Timings</p>
                      </div>
                   </div>


                   <div className='info-item'>
                    <div className='info-img'>
                    <img src={msgicon} alt="call-icon"/>
                    </div>
                      <div className='info-content'>
                          <p>info@hellodoctor.com.pk</p>
                          <p>Our Email</p>
                      </div>
                   </div>
                </div>
    </>
  )
}

export default InfoContact