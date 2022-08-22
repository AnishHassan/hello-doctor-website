import React from 'react'
import logo from '../../images/logo.png'
import './Footer.css'


function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='container'>
        <div className='section-logo'>
                  <img src={logo} alt='Hello Doctor logo'/>
                  <h3>Easy insurance, easy consultancy</h3>
             </div>

             <div className='section-contact'>
                  <h3>Contact Us</h3>
                  <p><span>Website :</span>  hellodoctor.com.pk</p>
                  <p><span>Email :</span> info@hellodoctor.com.pk</p>
             </div>

             <div className='section-links'>
             <h3>Useful Links</h3>
             <p>About Us</p>
             <p>Terms and Conditions</p>
             <p>Privacy</p>
             </div>

             <div className='section-newsletter'>
             <h3>NewsLetter</h3>
             <form action="" className='subscribe-newsletter'>
                        <input type="text" placeholder="Your email" name="search" />
                        <button type="submit"><span>Subscribe</span></button>
                    </form>
             </div>
        </div>
             
             <hr className='seperate' />

             <div className='footer-extends'>
             <p>Terms</p>
             <p>Privacy Policy</p>
             <p>Copyright 2022 Hellodoctor. All Rights Reserved </p>
             </div>

      </div>
    </>
  )
}

export default Footer