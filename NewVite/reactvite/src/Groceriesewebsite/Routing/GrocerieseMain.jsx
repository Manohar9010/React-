import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'


export default function GrocerieseMain() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Home/>
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
