import React from 'react'
import Header from './Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Todopending from './Todopending'
import TodoDone from './TodoDone'
import Indexlist from './Indexlist'
import Home from './Home'

export default function RouteMain() {
  return (
    <div>

        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/todo' element={<Indexlist/>}/>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
         
        </BrowserRouter>

    </div>
  )
}
