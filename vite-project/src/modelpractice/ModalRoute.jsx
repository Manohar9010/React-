import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import UserPage from './UserPage'
import Home from './Home'

export default function ModalRoute() {
  return (
    <div>
<BrowserRouter>
<Header/>
<Routes>
    <Route path='/userpage' element={<UserPage/>} />
    <Route path='/home' element={<Home/>} />
</Routes>
 
</BrowserRouter>


    </div>
  )
}

