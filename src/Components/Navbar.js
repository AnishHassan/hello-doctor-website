import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaFileExcel, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import logo from '../images/logo.png'
import './Navbar.css'
import NavExtends from './NavExtends';
function Navbar() {

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

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='home' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='about' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='services' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='what-we-treat' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    What we treat
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='coorporate' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Coorporate
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='hello-wish' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Hellowish
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='careers' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Careers
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='contact-us' exact="true" offset={-80} className='nav-links' onClick={closeMobileMenu}>
                                    Contact Us
                                </Link>
                            </li>



                        </ul>

                       
                    </div>
                    <div>
                 <hr className='seperate' />
         <NavExtends/>
         <hr className='seperateL' />
                 </div>

               
                </div>

            </IconContext.Provider>
           
        </>
    )
}

export default Navbar