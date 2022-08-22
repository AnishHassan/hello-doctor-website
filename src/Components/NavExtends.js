import React, { useEffect, useState } from 'react'
import './NavExtends.css'
import searchicon from '../images/search.png'
import callicon from '../images/call.png'
import msgicon from '../images/msg.png'
import timeicon from '../images/time.png'

function NavExtends() {

    const [updates, setUpdates] = useState([]);


    useEffect(() => {
        return setUpdates([{ value: 'The representatives of EFU Life Assurance & Rehability UK call on SECP Chairman Aamir Khan & Commissioner Insurance Sadia Khan at SECP Head Office ' }])
    }, [])

    return (
        <>
         
            {updates.map((item) => {
                console.log(item);
                return <p className='update'><span>Updates:</span> {item.value}</p>
            })

            }

            <div className='navextends'>
                <div className='infosearch'>
                    <form action="" className='searchbar'>
                        <input type="text" placeholder="i.e. Cancer doctor" name="search" />
                        <button type="submit"><img src={searchicon} alt="search-icon" /></button>
                    </form>
                </div>


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
                          <p>Mon-Sat (9am -9pm)</p>
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
            </div>


        </>
    )
}

export default NavExtends