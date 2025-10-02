import React from 'react'
import LandingPage from '../components/LandingPage'
import Marquee from '../components/Marquee'
import Cards from '../components/Cards'
// import Abouthero from '../components/Abouthero'
import Featured from '../components/Featured'
// import Playfull from "../components/Playfull"
import StartProject from '../components/StartProject'
import TalkBanner from '../components/TalkBanner'
import FooterOrbitMoonTech from '../components/FooterOrbit'
const Gallery = () => {
  return (
    <div>
      <LandingPage/>
      <Marquee/>
      {/* <Abouthero/> */}
      {/* <Playfull/> */}
      <Featured/>
      <Cards/>
      <StartProject/>
      <TalkBanner/>
      <FooterOrbitMoonTech/>
    </div>
  )
}

export default Gallery
