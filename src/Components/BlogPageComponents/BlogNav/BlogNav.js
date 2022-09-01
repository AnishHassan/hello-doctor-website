import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import logo from '../../../images/logo.png'
import searchicon from '../../../images/search.png'

import './BlogNav.css'

function BlogNav() {

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 10) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    useEffect(() => {
        window.addEventListener('scroll', changeNav);

    }, []);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={scrollNav ? 'navbar' : 'navbar dnav'}>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <img src={logo} width='170px' />
                        </Link>

                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>

                        <div className='infosearch'>
                    <form action="" className='searchbar'>
                        <input type="text" placeholder="Search for blogs here" name="search" />
                        <button type="submit"><img src={searchicon} alt="search-icon" /></button>
                    </form>
                </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='about' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                   Top Rated
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='services' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Most Viewed
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='what-we-treat' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Most Recent
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='coorporate' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Contact Us
                                </Link>
                            </li>

                        </ul>

                       
                    </div>
                    <div>
                 <hr className='seperate' />
                 </div>

               
                </div>

            </IconContext.Provider>
           
        </>
    )
}

export default BlogNav