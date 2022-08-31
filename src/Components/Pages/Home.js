import React from 'react'
import Appinfo from '../AppInfo/Appinfo'
import BlogSection from '../BlogSection/BlogSection'
import Easyaccess from '../Easyaccess/Easyaccess'
import Footer from '../Footer/Footer'
import Medicalteam from '../MedicalTeam/Medicalteam'
import MobileAppExtra from '../MobileAppextra/MobileAppExtra'
import Navbar from '../Navbar'
import OurServices from '../OurServices/OurServices'
import Partnersinfo from '../PartnersInfo/Partnersinfo'
import Possibilities from '../Possiblities/Possibilities'
import Services from '../Services/Services'

function Home() {
  return (
    <>

    <Navbar />
    
     <Appinfo/>
     <Partnersinfo/>
     <Services/>
     <Possibilities/>
     <Easyaccess/>
     <Medicalteam/>
     <OurServices/>
     <MobileAppExtra/>
     <BlogSection/>

     <Footer/>
    </>
  )
}

export default Home