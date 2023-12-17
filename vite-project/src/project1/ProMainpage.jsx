import React from 'react'
import './proMainpage.css'
import PageHeader from './webpages/PageHeader'
import PageFrist from './webpages/PageFrist'
import PageSecond from './webpages/PageSecond'
import PageThrid from './webpages/PageThrid'
import PageForth from './webpages/PageForth'
import PageFifth from './webpages/PageFifth'
import PageSixth from './webpages/PageSixth'
import PageSeventh from './webpages/PageSeventh'
import PageEighth from './webpages/PageEighth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './webpages/Error404'

export default function ProMainpage() {
  return (
    <div>
      {/* <PageHeader/> */}
      {/* <PageFrist/> */}
      {/* <PageSecond/>
      <PageThrid/>
      <PageForth/>
      <PageFifth/>
      <PageSixth/>
      <PageSeventh/>
      <PageEighth/> */}
      <BrowserRouter>
      <PageHeader/>
         <Routes>
          {/* <Route path='/' element={<PageHeader/>}/> */}
          <Route path='/' element={ <PageFrist/>}/>
          <Route path='/second' element={ <PageSecond/>}/>
          <Route path='/third' element={ <PageThrid/>}/>
          <Route path='/forth' element={ <PageForth/>}/>
          <Route path='/fifth' element={ <PageFifth/>}/>
          <Route path='/sixth' element={ <PageSixth/>}/>
          <Route path='/seventh' element={ <PageSeventh/>}/>
          <Route path='*' element={ <Error404/>}/>

         </Routes>
         
         </BrowserRouter>
        
    </div>
  )
}
