import React from 'react'
import InfoContact from '../../Reuse-Components/InfoContact.js'

import './BlogLayout.css'

function BlogLayout() {
    return (
        <>
            <div className='Blog-container'>
                <div className='Blog-upper-content'>
                    <div className='Blog-heading'>
                        <h2>Top 5 Food That Boost Your Mental Health</h2>
                    </div>
                    <div className='info-contact'>
                        <InfoContact />
                    </div>
                </div>

                <div className='Blog-details'>
                               <span>Published</span>
                                    <p>March 29,2022</p>
                                    <p>  Reading Time: <span>3 minutes</span></p>
                               </div>
                </div>
        </>
    )
}

export default BlogLayout