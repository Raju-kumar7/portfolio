import React from 'react'
import HeroSection from '../HeroSection'
import MySkills from '../MySkills'
import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import MyPortfolio from '../MyPortfolio'

const Home = () => {
  return (
    <div className=''>
      <HeroSection/>
      <AboutMe/>
      <MySkills/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
      
    </div>
  )
}

export default Home
