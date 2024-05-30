import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Listing from '../Pages/Otherpages/Listing'


export default function GrocerieseMain() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='list' element={<Listing/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
