import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Filter,
  Home,
  LayoutGrid,
  LayoutPanelLeft,
} from "lucide-react";
import Slider from "@mui/material/Slider";
import { Rating } from "@mui/material";
import Stayhome from "../Home/Stayhome/Stayhome";
import PopuralCard from "../Home/PopularProduct/PopuralCard";

function valuetext(value) {
  return `${value}°C`;
}

export default function Listing() {
  const [value, setValue] = React.useState([20, 37]);
  const [open1,setOpen1]=useState(false)
  const [open2,setOpen2]=useState(false)

  const openfun1=()=>{
    setOpen1(!open1)
  }
  const openfun2=()=>{
    setOpen2(!open2)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <div className=" py-16 rounded-[25px]  mt-12 mx-10  bg-[url('https://nest-frontend-v6.netlify.app/assets/imgs/blog/header-bg.png')] bg-no-repeat bg-cover">
        <h1 className="ms-24">Snack</h1>

        <ul className="flex gap-3 ms-20 mt-10">
          <li className="flex text-green-500">
            {" "}
            <Home color="#5adb14" size={20} className="me-2 " /> Home{" "}
            <ChevronRight size={20} className="mt-1" color="#959d90" />
          </li>
          <li className="flex text-gray-500">
            Shop <ChevronRight size={20} className="mt-1" color="#959d90" />
          </li>
          <li className="text-gray-500">Snack</li>
        </ul>
      </div>

      <div className="grid mt-5 grid-cols-5">
        <div className=" mx-2 ">
          <div className="border-2 rounded-lg shadow-sm">
            <h4
              className="ms-4 mt-3 relative after:content-[''] after:w-52 after:bg-gray-300 after:h-0.5 after:-bottom-5 after:left-0
             after:absolute before:absolute  before:content-[''] before:-bottom-5 before:z-10 before:w-24 before:bg-green-300 before:h-0.5  "
            >
              Category
            </h4>
            <ul className=" mt-5 me-3">
              <li className="flex gap-4 text-sm mb-2 text-center justify-between  border-2 p-1 hover:border-gray-300 duration-200 items-center rounded">
                {" "}
                <img
                  className="w-8"
                  src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg"
                  alt=""
                />{" "}
                Milk & Dairies{" "}
                <span className="bg-green-500 rounded-full text-xs grid content-center text-center h-6 w-7">
                  30
                </span>
              </li>
              <li className="flex gap-4 text-sm mb-2 text-center  justify-between  border-2 p-1 hover:border-gray-300 duration-200 items-center rounded">
                <img
                  className="w-8"
                  src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-2.svg"
                  alt=""
                />{" "}
                Clothing{" "}
                <span className="bg-green-500 rounded-full text-xs grid content-center text-center h-6 w-7">
                  35
                </span>
              </li>
              <li className="flex gap-4 text-sm mb-2 text-center  justify-between  border-2 p-1 hover:border-gray-300 duration-200 items-center rounded">
                <img
                  className="w-8"
                  src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-3.svg"
                  alt=""
                />{" "}
                Pet Foods{" "}
                <span className="bg-green-500 rounded-full text-xs grid content-center text-center h-6 w-7">
                  42
                </span>
              </li>
              <li className="flex gap-4 text-sm mb-2 text-center  justify-between  border-2 p-1 hover:border-gray-300 duration-200 items-center rounded">
                <img
                  className="w-8"
                  src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-4.svg"
                  alt=""
                />{" "}
                Banking material{" "}
                <span className="bg-green-500 rounded-full text-xs grid content-center text-center h-6 w-7">
                  34
                </span>
              </li>
              <li className="flex gap-4 text-sm mb-2 text-center  justify-between  border-2 p-1 hover:border-gray-300 duration-200 items-center rounded">
                <img
                  className="w-8"
                  src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-5.svg"
                  alt=""
                />{" "}
                Fresh Fruit{" "}
                <span className="bg-green-500 rounded-full text-xs grid content-center text-center h-6 w-7">
                  26
                </span>{" "}
              </li>
            </ul>
          </div>
          <div className="border-2 rounded-lg mt-4 shadow-sm">
            <h4
              className="ms-4 mt-3 relative after:content-[''] after:w-52 after:bg-gray-300 after:h-0.5 after:-bottom-5 after:left-0
             after:absolute before:absolute  before:content-[''] before:-bottom-5 before:z-10 before:w-24 before:bg-green-300 before:h-0.5  "
            >
              Fill by price
            </h4>

            <div className="w-9/12 ms-4 mt-5">
              <Slider
                size={"small"}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="success"
              />
              <div className="flex justify-between">
                <p className="text-gray-400">
                  From: <span className="text-green-600 font-medium">$500</span>{" "}
                </p>{" "}
                <p className="text-gray-400 font-medium ">
                  To: <span className="text-green-600">$1000</span>
                </p>
              </div>
            </div>
            <div>
              <h6 className="ms-4">Color</h6>
              <ul className="text-gray-600 text-sm  flex row gap-2">
                <li>
                  <input type="checkbox" /> <span>Red (56)</span>
                </li>
                <li>
                  <input type="checkbox" /> <span>Green (78)</span>
                </li>
                <li>
                  <input type="checkbox" /> <span>Blue (54)</span>
                </li>
              </ul>
              <h6 className="ms-4">Item Condition</h6>
              <ul className="text-gray-600 text-sm  flex row gap-2">
                <li>
                  <input
                    type="checkbox"
                    className="outline-red-600 focus:outline-none border-red-600"
                  />
                  <span> New (1506)</span>
                </li>{" "}
                <li>
                  {" "}
                  <input type="checkbox" /> <span>Refurbished (27)</span>{" "}
                </li>
                <li>
                  {" "}
                  <input type="checkbox" /> <span>Used (45)</span>{" "}
                </li>
              </ul>
              <div>
                <button className="ms-[30px] mb-6 hover:scale-x-110  hover:bg-orange-400  hover:duration-500 flex gap-2 bg-green-500 py-1 px-3  items-center text-white">
                  <Filter color="white" size={15} /> Fillter
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-lg mt-4 py-4 shadow-sm">
            <h4
              className="ms-4  relative after:content-[''] after:w-52 after:bg-gray-300 after:h-0.5 after:-bottom-5 after:left-0
             after:absolute before:absolute  before:content-[''] before:-bottom-5 before:z-10 before:w-24 before:bg-green-300 before:h-0.5  "
            >
              New products
            </h4>

            <div>
              <div className="flex  relative  before:absolute before:w-56 before:bottom-0 before:bg-gray-300 before:h-[1px] gap-3 mt-5 ms-3">
                <div>
                  <img
                    className="w-20"
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <h3 className="text-[20px] hover:text-orange-500 duration-500 text-green-600">
                    Chen <br /> Cardigan
                  </h3>
                  <p className="text-gray-500">$99.50</p>
                  <Rating name="size-small" defaultValue={2} size="small" />
                </div>
              </div>
              <div className="flex relative  before:absolute before:w-56 before:bottom-0 before:bg-gray-300 before:h-[1px] gap-3 mt-3  ms-3  ">
                <div>
                  <img
                    className="w-20"
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[20px] text-green-600 hover:text-orange-500 duration-500">
                    Chen <br /> Sweater
                  </h3>
                  <p className="text-gray-500">$89.50</p>
                  <Rating name="size-small" defaultValue={2} size="small" />
                </div>
              </div>
              <div className="flex gap-3 mt-3 ms-3">
                <div>
                  <img
                    className="w-20"
                    src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-5.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[20px] text-green-600 hover:text-orange-500 duration-500">
                    Colorful <br /> Jacket
                  </h3>
                  <p className="text-gray-500">$25</p>
                  <Rating name="size-small" defaultValue={2} size="small" />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-4 rounded-[20px]  shadow-sm">
            <img
              className="rounded-[20px]"
              src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-11.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="flex justify-between mx-3">
            <div>
              <h6 className="text-[18px] text-gray-500 font-normal">
                We found 29 items for you!{" "}
              </h6>
            </div>
            <div className="flex gap-2">
              <div className="border-2 flex gap-2 rounded py-1 px-2 relative" onClick={openfun1}>
                <LayoutGrid color="#b7b4b4" /> <span className="text-gray-500 text-[15px]">Show:50</span> 
                <ChevronDown color="#b7b4b4" size={18} className="mt-1" />
                {
                  (open1 === true) && (
                
                <div className="absolute rounded shadow-lg  left-0 top-9 z-10 w-[130px] bg-white">
                  <ul className="ps-0 pt-2 text-left">
                    <li className="hover:bg-green-600 ps-4 hover:text-white">5</li>
                    <li className="hover:bg-green-600 ps-4 hover:text-white" >100</li>
                    <li className="hover:bg-green-600 ps-4 hover:text-white" >150</li>
                    <li className="hover:bg-green-600 ps-4 hover:text-white" >200</li>
                    <li className="hover:bg-green-600 ps-4 hover:text-white" >A11</li>
                  </ul>

                </div>)}
              </div>
              <div className="relative border-2 flex gap-2 rounded py-1 px-2" onClick={openfun2}>
                <LayoutPanelLeft color="#b7b4b4" /> Sort by: Featured{" "}
                <ChevronDown color="#b7b4b4" size={18} className="mt-1"/>
 {
  (open2 === true )&& (
 
                <div className="absolute shadow-lg top-9 left-0 z-10 bg-white rounded w-[200px]">
                  <ul className="flex row gap-2 pt-2 mx-1 ps-0 text-left">
                    <li className="hover:bg-green-600 hover:text-white" >Featured</li>
                    <li className="hover:bg-green-600 hover:text-white" >Price:Low to High</li>
                    <li className="hover:bg-green-600 hover:text-white" >Price:High to Low</li>
                    <li className="hover:bg-green-600 hover:text-white" >Release Date</li>
                    <li className="hover:bg-green-600 hover:text-white" >Avg.Rating</li>
                  </ul>

                </div>
  )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((e, i) => {
              return (
                <div>
                  <PopuralCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-5 mx-2">
        <Stayhome />
      </div>
    </div>
  );
}
