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
import {ProtectedRoute,    ProtectedRouteuser } from './ProtectedRoute'
import ProfilePage from '../UI/Pages/ProfilePage/ProfilePage'
import WishList from '../UI/Pages/Wishlist/WishList'
import ProductPage from '../UI/Pages/ProductPage/ProductPage'
import Store from '../Redux/App/Store'
import { Provider } from 'react-redux'
import Dashbord from '../UI/Pages/Dashbord/Dashbord'
import PreviewData from '../UI/Pages/ProductPage/PreviewData'
export default function BellaRouter() {
  return (
    <div>
   <BrowserRouter>
   <Provider store={Store}>
   <BellaHeader/>
   <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/belllogin' element={<BellalLogin/>} />
    <Route path='/bellrigister' element={<BellRegistetion/>} />
    <Route path='/bellabout' element={<BellaAboutus/>} />
    <Route path='/bellcontact' element={<BellaContact/>} />
    <Route path='/wishlist' element={<ProtectedRouteuser   Componentuser={<WishList/>} /> } />
    <Route path='/profile' element={<ProtectedRouteuser   Componentuser={<ProfilePage/>} />}/>
    <Route path='/wishlist' element={<ProtectedRoute  Componentprofile={<WishList/>}/>    } />
    <Route path='/profile' element={<ProtectedRoute   Componentprofile={<ProfilePage/>} />}/>
    <Route path='/product' element={<ProtectedRoute Componentprofile={<ProductPage/>}/>}/>
     <Route path='dashbord'  element={<ProtectedRoute  Componentprofile={<Dashbord/>} />}  />
     <Route path="/preview" element={<PreviewData/>} />     
    <Route path='*' element={<BellError/>} />
    {/* <Route
            path='/wishlist'
            element={
              <>
                <ProtectedRouteuser Componentuser={<WishList />} />
                <ProtectedRoute Componentprofile={<WishList />} />
              </>
            }
          /> */}
   </Routes>
   <BellaFooter/>
   </Provider>
   </BrowserRouter>




    </div>
  )
}
