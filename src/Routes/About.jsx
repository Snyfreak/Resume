import React from 'react'
import { Form } from 'react-router-dom'
import { AboutContent } from '../Components/AboutContent'
import { Footer } from '../Components/Footer'
import { Heroimg2 } from '../Components/Heroimg2'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 text = "bhai bahot kuch hai batane ko"  heading="About me"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About