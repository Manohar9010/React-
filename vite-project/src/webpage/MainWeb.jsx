import React from 'react'
 import Header from './pages/Header.jsx'
import './MainWeb.css'
import PageFrist from './pages/PageFrist'
import PageSecond from './pages/PageSecond'
import PageThird from './pages/PageThird'
import PageForth from './pages/PageForth'
import PageFifth from './pages/PageFifth.jsx'


export default function MainWeb() {
  return (
    <div>
       
        <Header/>
        <PageFrist/>
        <PageSecond/>
        <PageThird/>
        <PageForth/>
        <PageFifth/>
        
    </div>
  )
}
