/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import HeroSection from '../HeroSection/HeroSection'
import Service from '../Services/Service'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <Service />
      <About />
      <Contact />
    </div>
  )
}

export default Home