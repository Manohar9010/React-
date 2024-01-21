import React from 'react'
import './Footer.css'
import { Facebook, Instagram, Linkedin, MailOpen, MapPin, Phone, Twitter } from 'lucide-react'
export default function Footer() {
  return (
    <div>
     <div className='d-flex'>
          <div>
            <h5>Contact Us</h5>
            <ul>
                <li><MapPin  /> California, #32841 block, #221DRS 75 West Rock, Maple Building, UK.</li>
                <li> <a href=""><Phone /> +(21)-255-999-8888</a></li>
                <li><a href=""><MailOpen /> Exterior-mail@support.com</a>    </li>
                <li>
                    <ul className='d-flex'>
                        <li><a href=""><Facebook /></a></li>
                        <li><a href=""><Twitter /></a></li>
                        <li><a href=""><Instagram /></a></li>
                        <li><a href=""><Linkedin /></a></li>
                        <li><a href=""></a></li>

                    </ul>
                </li>
            </ul>
          </div>
          <div>
            <h5>Category</h5>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
          <div>
            <h5>Latest Gallery</h5>
            <div className='d-flex'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
          </div>
          <div>
            <h5>Travel & Trip</h5>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
     </div>
     <div>

     </div>


    </div>
  )
}
