import React from 'react'
import Appinfo from '../AppInfo/Appinfo'
import Easyaccess from '../Easyaccess/Easyaccess'
import Medicalteam from '../MedicalTeam/Medicalteam'
import Partnersinfo from '../PartnersInfo/Partnersinfo'
import Possibilities from '../Possiblities/Possibilities'
import Services from '../Services/Services'

function Home() {
  return (
    <>
     <Appinfo/>
     <Partnersinfo/>
     <Services/>
     <Possibilities/>
     <Easyaccess/>
     <Medicalteam/>
    </>
  )
}

export default Home