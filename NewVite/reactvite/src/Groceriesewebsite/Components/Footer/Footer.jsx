import React from "react";
import "./Footer.css";
import { Clock10, Headphones, MapPin, Send } from "lucide-react";
export default function Footer() {
  return (
    <div>
      <div className=" flex mt-5 mx-2 justify-between">
        <div className="flex-auto w-9/12 " >
          <img
            src={
              "https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg"
            }
            alt=""
            className=""
          />
          <p className="ms-5 my-3 font-medium ">
            Awesome grocery store website template
          </p>
          <ul className=" flex row gap-2">
            <li className="flex ">
              <MapPin color="#379d2a" size={45} className="me-2" />
              <p>
                <span className="font-semibold me-1"> Address:</span>{" "}
                <span className="hover:text-green-600 duration-500 ease-in">
                  {" "}
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </span>
              </p>
            </li>
            <li className="flex ">
              <Headphones color="#379d2a" size={20} className="me-2" />{" "}
              <span className="font-semibold me-1">Call Us:</span>{" "}
              <span className="hover:text-green-600 duration-500 ease-in">
                (+91) - 540-025-124553
              </span>
            </li>
            <li className="flex ">
              <Send color="#379d2a" size={20} className="me-2" />{" "}
              <span className="font-semibold me-1">Email: </span>{" "}
              <span className="hover:text-green-600 duration-500 ease-in">
                sale@Nest.com
              </span>
            </li>
            <li className="flex ">
              <Clock10 color="#379d2a" size={20} className="me-2" />{" "}
              <span className="font-semibold me-1"> Hours:</span>{" "}
              <span className="hover:text-green-600 duration-500 ease-in">
                {" "}
                10:00 - 18:00, Mon - Sat{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-auto w-5/12   ">
          <p className="ms-4 mb-3 ">Company</p>
          <ul className="flex row gap-2 text-black">
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              About Us
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Delivery information
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Privacy Policy{" "}
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Support Center
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Careers
            </li>
          </ul>
        </div>
        <div className="flex-auto w-5/12  ">
          <ul className="flex row gap-2">
            <h4>Account</h4>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Sign In
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              View Cart
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              My Wishlist
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Track My Order
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Help Ticket
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              {" "}
              Shipping Details{" "}
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Comapre Products
            </li>
          </ul>
        </div>
        <div className="flex-auto w-5/12 p-0 m-0">
          <ul className="flex row gap-2">
            <h4>Corporate</h4>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Become a Vendor
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Affiliate Program
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Farm Business
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Farm Careers
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Our Suppliers
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Accessibility
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Promotions
            </li>
          </ul>
        </div>
        <div className="flex-auto w-6/12 me-3">
          <ul className="flex row gap-2">
            <h4>Popular</h4>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Milk & Flavoured Milk
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Butter and Margarine
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Eggs Substitutes
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Marmalades
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Sour Cream and Dips
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Tea & Kombucha
            </li>
            <li className="cursor-pointer hover:translate-x-2 hover:text-green-600 duration-300 ease-in">
              Cheese{" "}
            </li>
          </ul>
        </div>
        <div className=" w-7/12 flex me-1 row h-72">
          <h4>Install App</h4>
          <p className="">From App Store or Google Play</p>
          <div className="flex gap-3">
            <div
              className="cursor-pointer hover:-translate-y-1 duration-500
            "
            >
              {" "}
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/app-store.jpg"
                alt=""
              />{" "}
            </div>
            <div className="cursor-pointer hover:-translate-y-1 duration-500
            ">
              {" "}
              <img
                src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/google-play.jpg"
                alt=""
              />{" "}
            </div>
          </div>
          <p>Secured Payment Gateways</p>
          <div>
            <img
              src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/payment-method.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
