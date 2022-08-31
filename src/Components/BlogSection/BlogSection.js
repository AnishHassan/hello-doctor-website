import React from 'react'

import './BlogSection.css'

import blog1 from '../../images/blog-1.png'
import blog2 from '../../images/blog-2.png'
import blog3 from '../../images/blog-3.png'

import {WiDirectionUpRight} from 'react-icons/wi'


function BlogSection() {
    return (
        <>
            <div className='blog-section-container'>

                <div className='blog-section-head'>
                    <h2 className='blog-section-heading'>Hello Doctor Blog</h2>
                    <p className='blog-section-heading'>Show more <WiDirectionUpRight/></p>

                </div>

                <div className='blog-section-content'>
                    <div className='blog-section-card'>
                        <div className='blog-section-card-image'>

                            <img src={blog1} alt="blog-img" />
                        </div>

                        <div className='blog-section-card-content'>
                        <div className='blog-section-card-heading'>
                                <h3>Top 5 Food That Boost Your Mental Health</h3>
                            </div>
                               <div className='blog-section-card-details'>
                               <span>Published</span>
                                    <p>March 29,2022</p>
                                    <p>  Reading Time: <span>3 minutes</span></p>
                               </div>

                               <div className='blog-section-card-description'>
                                    <p>You are what you eat” is a classic saying but is still true until now.. <span>Read more</span> </p>
                               </div>
                        </div>


                    </div>


                    <div className='blog-section-card'>
                        <div className='blog-section-card-image'>

                            <img src={blog2} alt="blog-img" />
                        </div>

                        <div className='blog-section-card-content'>
                        <div className='blog-section-card-heading'>
                                <h3>Make vegetables a big part of your diet</h3>
                            </div>
                               <div className='blog-section-card-details'>
                                    <span>Published</span>
                                    <p>March 29,2022</p>
                                    <p>  Reading Time: <span>3 minutes</span></p>
                               </div>
                               <div className='blog-section-card-description'>
                                    <p>A diet rich in vegetables and fruits can lower blood pressure, <span>Read more</span> </p>
                               </div>
                        </div>

                    </div>


                    <div className='blog-section-card'>
                        <div className='blog-section-card-image'>

                            <img src={blog3} alt="blog-img" />
                        </div>

                        <div className='blog-section-card-content'>
                        <div className='blog-section-card-heading'>
                                <h3>Be hydrated all the time</h3>
                            </div>
                               <div className='blog-section-card-details'>
                               <span>Published</span>
                                    <p>March 29,2022</p>
                                    <p>  Reading Time: <span>3 minutes</span></p>
                               </div>

                               <div className='blog-section-card-description'>
                                    <p>Dehydration can have a noticeable effect if you lose as little as 2% of your body’s water content. <span>Read more</span> </p>
                               </div>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}

export default BlogSection