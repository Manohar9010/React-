import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../UI/Component/Footer'
import Header from '../UI/Component/Header'
import Home from '../UI/Pages/Common/Home/Home'
import {ProtectedRoute,    ProtectedRouteuser } from './ProtectedRoute'
import Store from '../Redux/App/Store'
import { Provider } from 'react-redux'
import "../css/Max576px.css"
import "../css/Min576px.css"
import "../css/Min768px.css"
import "../css/Min992px.css"
import "../css/Min1200px.css"
import "../css/Min1400px.css"
import BellalLogin from '../UI/Pages/Auth/Bellaloginpage/BellalLogin'
import BellRegistetion from "../UI/Pages/Auth/Registetionpage/BellRegistetion"
import BellaAboutus from "../UI/Pages/Common/About/BellaAboutus"
import Showpreview from "../UI/Component//Showpreview"
import BellError from "../UI/Pages/Error/BellError"
// import WishList from '../UI/Pages/User/Wishlist/WishList'
import ProfilePage from '../UI/Pages/Common/ProfilePage/ProfilePage'
import ProductPage from "../UI/Pages/Admin/ProductPage/ProductPage"
import Dashbord from "../UI/Pages/Admin/Dashbord/Dashbord"
import PreviewData from "../UI/Pages/Admin/ProductPage/PreviewData"
import Menperfume from "../UI/Pages/Common/Fragrance/Menperfume" 
import Femaleperfume from "../UI/Pages/Common/Fragrance/Femaleperfume"
import Allperfumes from "../UI/Pages/Common/Fragrance/Allperfumes"
import Unisex from "../UI/Pages/Common/Fragrance/Unisex"
import Oudcollection from "../UI/Pages/Common/Fragrance/Oudcollection"
import Littleluxuries from "../UI/Pages/Common/Fragrance/Littleluxuries"
import ShopAll from '../UI/Pages/Common/ShopAll/ShopAll'
import WishList from '../UI/Pages/User/Cart/WishList'
export default function BellaRouter() {
  return (
    <div>
   <BrowserRouter>
   <Provider store={Store}>
   <Header/>
   <Routes>

    {/*========== common for all ===============*/}
    <Route path='/' element={<Home/>} />
    <Route path='/belllogin' element={<BellalLogin/>} />
    <Route path='/bellrigister' element={<BellRegistetion/>} />
    <Route path='/bellabout' element={<BellaAboutus/>} />
    <Route path='/bellcontact' element={<ShopAll/>} />
    <Route path='/showpreview/:id' element={<Showpreview/>}/>
    <Route path='*' element={<BellError/>} />

    {/*============= user =================  */}
    <Route path='/wishlist' element={<ProtectedRouteuser   Componentuser={<WishList/>} /> } />
    <Route path='/profile' element={<ProtectedRouteuser   Componentuser={<ProfilePage/>} />}/>

    {/* =============== Admin ================ */}
    <Route path='/profile' element={<ProtectedRoute   Componentprofile={<ProfilePage/>} />}/>
    <Route path='/product' element={<ProtectedRoute Componentprofile={<ProductPage/>}/>}/>
     <Route path='dashbord'  element={<ProtectedRoute  Componentprofile={<Dashbord/>} />}  />

     <Route path="/preview" element={<PreviewData/>} />
     {/* <Route path="/menperfume" element={<Menperfume/>} />
     <Route path='/femaleperfume' element={<Femaleperfume/>} />
     <Route path="/unisex" element={<Unisex/>} />
     <Route path='/oudcollection' element={<Oudcollection/>} />
     <Route path="/littleluxuries" element={<Littleluxuries/>}/> */}

     <Route path='/fragrance' element={<Allperfumes/>}/>
   </Routes>
   <Footer/>
   </Provider>
   </BrowserRouter>
    </div>
  )
}


