import React from 'react'
import './Aboutmain.css'
import AboutPage1 from './AboutPage1'
import AboutPage2 from './AboutPage2'
import AboutPage3 from './AboutPage3'
import AboutPage4 from './AboutPage4'
import AboutPage5 from './AboutPage5/AboutPage5'
import Footer from '../Footer'
import Header from '../Header'
export default function Aboutmain() {
  return (
    <div className='aboutmain'>
      <div className='abouthead'>

      <Header/>
      </div>
    <AboutPage1/>
    <AboutPage2/>
    <AboutPage3/>
    <AboutPage4/>
    <AboutPage5/>
    <Footer/>
    </div>
  )
}
