import React from 'react'
import AboutSection from './AboutSection'
import OurStorySection from './OutStory'
import TeamAndCTASection from './Team'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar />
      <AboutSection />
      <OurStorySection />
      <TeamAndCTASection />
      <Footer />
    </div>
  )
}

export default About