import React from 'react'
import './Footer.css'
import { Facebook, Instagram, Linkedin, MailOpen, MapPin, Phone, Twitter } from 'lucide-react'
import imgfoot1 from "./Images/footerimge1.jpg"
import imgfoot2 from "./Images/thirdpageimage2.jpg"
import imgfoot3 from "./Images/thirdpageimage4.jpg"
import imgfoot4 from "./Images/forthpageimage2.jpg"
import imgfoot5 from "./Images/thirdpageimage5.jpg"
import imgfoot6 from "./Images/thirdpageimage1.jpg"
export default function Footer() {
  return (
    <div>
     <div className='footermain d-flex'>
          <div style={{width:"370px",marginRight:"80px "}}>
            <h5>Contact Us</h5>
            <ul className='d-grid gap-3'>
                <li className='text-secondary'><MapPin  /> California, #32841 block, #221DRS 75 West Rock, Maple Building, UK.</li>
                <li> <a href=""><Phone /> +(21)-255-999-8888</a></li>
                <li><a href=""><MailOpen /> Exterior-mail@support.com</a>    </li>
                <li>
                    <ul className='socicons d-flex gap-4'>
                        <li><a href=""><Facebook /></a></li>
                        <li><a href=""><Twitter /></a></li>
                        <li><a href=""><Instagram /></a></li>
                        <li><a href=""><Linkedin /></a></li>
                       

                    </ul>
                </li>
            </ul>
          </div>
          <div className='me-5'>
            <h5>Category</h5>
            <ul className='d-grid gap-2'>
               <li><a href="">Event Travel</a></li>
               <li><a href="">Holiday Trip</a></li>
               <li><a href="">Group Tour</a></li>
               <li><a href="">Pakage Holiday</a></li>
               <li><a href="">Gap Year</a></li>
            </ul>
          </div>
          <div className='me-5'>
            <h5>Latest Gallery</h5>
            <div className='Imgegalary'>
                <ul className=''> 
                    <li><a href=""><img src={imgfoot1} alt="" /></a></li>
                    <li><a href=""><img src={imgfoot2} alt="" /></a></li>
                    <li><a href=""><img src={imgfoot3} alt="" /></a></li>
                </ul>
                <ul className=''>
                    <li><a href=""><img src={imgfoot4} alt="" /></a></li>
                    <li><a href=""><img src={imgfoot5} alt="" /></a></li>
                    <li><a href=""><img src={imgfoot6} alt="" /></a></li>
                </ul>
            </div>
          </div>
          <div>
            <h5>Travel & Trip</h5>
            <ul className='d-grid gap-2'>
                <li><a href="">Bahamas</a></li>
                <li><a href="">Cambodia</a></li>
                <li><a href="">Dominica</a></li>
                <li><a href="">Egypt</a></li>
                <li><a href="">Germany</a></li>
            </ul>
          </div>
     </div>
     <div>

     </div>


    </div>
  )
}
