import React from 'react'
import appss from '../../images/appss.png'
import logo from '../../images/logo.png'
import appstore from '../../images/appstore.png'
import googleplay from '../../images/googleplay.png'

import './Appinfo.css'

function Appinfo() {
    return (
        <>

            <div className='appinfo'>
                <div className='appinfo-img'>
                    <img src={appss} alt="app-screenshots"/>
                </div>
                <div className='appinfo-content'>
                      <div className='appinfo-content-logo'>
                          <img src={logo} alt="company-logo"/>
                      </div>
                      <div className='appinfo-content-heading'>
                         <h1>GET YOURSELF INSURED </h1>
                      </div>
                      <div className='appinfo-content-detail'>
                         <p>In a country with a total population of 200 million people, more than 50% of individuals in Pakistan don’t have access to basic primary healthcare services, and approximately 42% fail to receive health coverage. </p>
                      </div>

                      <div className='appinfo-content-applinks'>
                          <img  src={appstore} alt="App store img"/>
                          <img  src={googleplay} alt="Google Play img"/>
                      </div>

                </div>
            </div>

        </>
    )
}

export default Appinfo