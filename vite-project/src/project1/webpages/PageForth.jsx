import React from 'react'
import './PageForth.css'
import imgfacebook from'../img/Facebook.png'
import imgfiveer from'../img/fiverr.png'
import imgupwork from'../img/Upwork.png'
import imgshopty from'../img/Shopify.png'
import imgamazon from'../img/amazon.png'
export default function PageForth() {
  return (
    <div>
        <div className="main_work container">
            <div className="work_left">
               <h1>Work for All these</h1>
               <h1>Brands & Clients</h1>

               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident similique temporibus deleniti vitae optio minima, dolor non, et natus neque repellat impedit atque. Nihil iusto sed omnis quidem! Dolore, maxime.</p>


               <button className='button w-button'>Hire Me</button>




            </div>
            <div className="work_right">
                   <div className="main_roud">
                     <div className="brand_round">
                        <img src={imgupwork} alt="" />
                     </div>
                     <div className="brand_round">
                        <img src={imgfiveer} alt="" />
                     </div>
                     <div className="brand_round">
                        <img src={imgamazon} alt="" />
                     </div>
                     <div className="brand_round">
                        <img src={imgshopty} alt="" />
                     </div>
                     <div className="brand_round">
                        <img src={imgfacebook} alt="" />
                     </div>
                         <div className="blur_round"></div>
                         <div className="yellow_round"></div>
                   </div>
            </div>
        </div>
  

    </div>
  )
}
