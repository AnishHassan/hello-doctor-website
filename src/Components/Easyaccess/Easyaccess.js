import React from 'react'
import './Easyaccess.css'

import map from '../../images/map.png'

function Easyaccess() {
  return (
    <>
     <div className='easyaccess-container'>
        <h1 className='easyaccess-heading'>
            Easy access
        </h1>

        <div className='easyaccess-content'>
             <div className='toggle-option'>
                  <div className='option-1'>
                    <p>Insurance</p></div>
                  <div className='option-2'> <p>Consultancy</p></div>
             </div>

             <div className='img-map'>
                  <img src={map} alt="Pakistan map" />
             </div>

             

        </div>
     </div>
    </>
   
  )
}

export default Easyaccess