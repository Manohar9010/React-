import React from "react";
import "./BellaFooter.css";
import { Facebook, Instagram, Youtube } from "lucide-react";
import footerimg1 from "../Images/footerimg1.png"
import footerimg2 from "../Images/footerimg2.avif"

export default function BellaFooter() {
  return (
    <div className="footermain">
      <div>
        <div className="footerdflex">
          <div className="footerone">
            <h6>OUR PROMISE</h6>
            <p>
              We make emotive, uncomplicated fragrances designed <br /> to make
              you feel good.
            </p>
            <p>
              Discover a unique range of bath, body, & skincare essentials with
              captivating fragrances at Bella Vita Luxury - a luxury lifestyle
              personal care brand that celebrates responsible luxury &
              thoughtful skincare.
            </p>
          </div>
          <div className="footertwo">
            <h6>INFORMATION</h6>
            <ul>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footerthree">
            <h6>SUPPORT</h6>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Shipping Policy</a>
              </li>
              <li>
                <a href="">Refund & Return Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footerfour">
            <h6>SIGN UP</h6>
            <input type="email"  placeholder="Enter Email"/>
            
            
          </div>
        </div>

        <div className="footermoretypes">
          <h6>MOST SEARCHED KEYWORDS </h6>
          <p>
            {" "}
            <a href="">
              {" "}
              Valentines day | gifts Valentine day gift for wife | Valentines
              day gifts for husband | Valentines day gifts for couples |
              Valentine day gifts for girlfriend | Valentines day gifts for
              boyfriend Birthday | Gift for Women/ Girls Body wash for men Best
              shower gel for women Shower Gel | for men and Women Body lotion
              for dry skin Body | Lotion for men Body | Lotion for women Shower
              Gel and Perfume Combo Shower | Travel Kit Body Shower Gel Travel
              Mini Kit Wedding Gifts | for Couples Gifts for Men Under 500 |
              Gifts for Women Under 500 Rakhi Online | India Best Selling Rakhis
              Gifts | Birthday | Gift for Men/ Boys Diwali Gifts for | Family
              and Friends Best Perfume | for Men Perfume for Men Long Lasting
              Perfume for Men | Perfume Gift Set Best Perfume | for Men Under
              500 Luxury Perfume | Luxury Perfume for Mens Perfume | for Women
              Unisex Perfume Ladies | Perfume Best Unisex Fragrances | Best
              Perfume for Women Perfume for Girls | Perfume Gift Set for Women
              Long Lasting Perfume | for Women Mini Perfume Set Women Perfume
              Gift | Set Best Perfume for Women under 500 Mens | Fragrance
              Perfume for Him | Best Luxury Perfume for Men | Luxury Perfume for
              Men Popular Mens | Cologne Unisex Scents Best Gender | Neutral
              Fragrances Mini Perfume Set | Deodrant Deo for men Deo for | women
              Gift Set for Women Gift | Set for Men Pocket Perfume for Men |
              Pocket Perfume for | Women Best Perfume for Men Under 500
            </a>
          </p>
        </div>
        <div className="footersoc">
          <div>
          <ul className="p-0 d-flex gap-3">
            <li><a href=""><Facebook /></a></li>
            <li><a href=""><Instagram /></a></li>
            <li><a href=""><Youtube /></a></li>
          </ul>

             <p><a href="">© 2024, Bella Vita Luxury (IDAM Natural Wellness Pvt. Ltd.)</a></p>
          </div>
          <div>
            <div className="footersecure"><img src={footerimg1} alt="" />  </div>
         <ul>
          <li> <img src={footerimg2} alt="" /></li>
         
         </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
