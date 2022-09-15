import React from 'react'
import { Form } from '../Components/Form'
import { AboutContent } from '../Components/AboutContent'
import { Footer } from '../Components/Footer'
import { Heroimg2 } from '../Components/Heroimg2'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (<>
    
    <Navbar/>
    <Heroimg2 heading="Contact me"  text="milne ka bando bast kara jaye"/>
    
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact