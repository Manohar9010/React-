import React from 'react'
import FirstPage from './FirstPage'
import Header from '../Header'
import './FrontPage.css'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './ForthPage/FourthPage'
import FifthPage from './FifthPage'
import SixthPage from './SixthPage'
import Footer from '../Footer'

export default function FrontPage() {
  return (
    <div className='fontmain' >
        <div  className='fronthead'>
        <Header/>
     
          
        </div>
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>
        <SixthPage/>
        <Footer/>

    </div>
  )
}
