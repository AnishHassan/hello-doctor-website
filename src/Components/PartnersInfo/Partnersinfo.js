import React from 'react'

import rehab from '../../images/rehab.png'
import jazz from '../../images/jazz.png'
import efu from '../../images/efu.png'
import askari from '../../images/askari.png'
import alfala from '../../images/alfala.png'
import UOL from '../../images/UOL.png'
import side from '../../images/side.png'


import './Partnersinfo.css'

function Partnersinfo() {
  return (
    <>
     <h2 className='heading'>Our Partners</h2>
      <div className='main-partners'>
           
           
            <div className='partners'>
                <img  src={rehab} alt="rehability Uk logo"   />
                <img  src={jazz} alt="rehability Uk logo" style={{width: "74px"}}/>
                <img  src={efu} alt="rehability Uk logo"  style={{width: "44px"}}/>
                <img  src={askari} alt="rehability Uk logo" />
                <img  src={alfala} alt="rehability Uk logo" />
                <img  src={UOL} alt="rehability Uk logo" />
               
            </div>

            {/* <div className='side-design'>
                <img src={side} alt="side design vector"/>
            </div> */}
            
      </div>
    </>
  )
}

export default Partnersinfo