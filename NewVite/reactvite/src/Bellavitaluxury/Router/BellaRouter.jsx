import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../UI/Pages/Home/Home'
import BellaFooter from '../UI/Component/BellaFooter'
import BellaHeader from '../UI/Component/BellaHeader'
import BellalLogin from '../UI/Pages/Bellaloginpage/BellalLogin'
import BellRegistetion from '../UI/Pages/Registetionpage/BellRegistetion'
import BellaAboutus from '../UI/Pages/bellAbout/BellaAboutus'
import BellaContact from '../UI/Pages/BellaContact/BellaContact'
import BellError from '../UI/Pages/BellError'
import '../UI/Pages/CssMediaQuary/Max576px.css'
import '../UI/Pages/CssMediaQuary/Min576px.css'
import '../UI/Pages/CssMediaQuary/Min768px.css'
import '../UI/Pages/CssMediaQuary/Min992px.css'
import '../UI/Pages/CssMediaQuary/Min1200px.css'
import '../UI/Pages/CssMediaQuary/Min1400px.css'
export default function BellaRouter() {
  return (
    <div>
   <BrowserRouter>
   <BellaHeader/>
   <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/belllogin' element={<BellalLogin/>} />
    <Route path='/bellrigister' element={<BellRegistetion/>} />
    <Route path='/bellabout' element={<BellaAboutus/>} />
    <Route path='/bellcontact' element={<BellaContact/>} />
    <Route path='*' element={<BellError/>} />
   </Routes>
   <BellaFooter/>
   
   </BrowserRouter>




    </div>
  )
}
