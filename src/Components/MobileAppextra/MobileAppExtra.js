import React from 'react'

import './MobileAppExtra.css'
import appstore from '../../images/appstore.png'
import googleplay from '../../images/googleplay.png'

function MobileAppExtra() {
  return (
    <>
    <div className='mobile-app-extra-container'>
    <div className='mobile-app-extra-txt'>
        <h1 className='mobile-app-extra-heading'>Download the Mobile app</h1>
        <h2 className='mobile-app-extra-heading'>#<span>easy</span>insurance</h2>
        <h2 className='mobile-app-extra-heading'>#<span>easy</span>consultancy</h2>

    </div>

    <div className='mobile-app-extra-applinks'>
                          <img  src={appstore} alt="App store img"/>
                          <img  src={googleplay} alt="Google Play img"/>
                      </div>


    </div>
    </>
    
  )
}

export default MobileAppExtra