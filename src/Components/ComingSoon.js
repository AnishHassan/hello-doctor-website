import React from 'react'
import { Link } from 'react-router-dom'
import './ComingSoon.css'
import logo from '../images/logo.png'

function ComingSoon() {
  return (
    <>
      <div className='coming-soon'>
      <Link to='/' >
                            <img src={logo} width='270px' />
                        </Link>
                <h1>Coming Soon ( Sorry for Inconvinience )</h1>
                <h3>That page is under development</h3>
                <Link className='link-page' to='/'> <p>Back to homepage...</p></Link>
      </div>
    
    </>
  )
}

export default ComingSoon