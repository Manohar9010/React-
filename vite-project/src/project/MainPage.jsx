import React from 'react'
import Header from './Header'
  import NavigationBar from './navigationbar'
import Body from './Body'
import Content from './Content'
import Footer from './Footer'
export default function MainPage() {
  return (
    <div>
        <Header/>
        <NavigationBar/>
        <div className='d-flex'>
        <Content/>
        <Body/>
        <Content/>
        </div>
        <Footer/>
        
    </div>
  )
}
