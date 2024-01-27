import React from 'react'
import ShopCategorycard from '../ShopbyCategory/ShopCategorycard'
import "./Shopbyoccasion.css"
import occasionimg1 from "../../../Images/occasionimg1.webp"
import occasionimg2 from "../../../Images/occasionimg2.webp"
import occasionimg3 from "../../../Images/occasionimg3.webp"
import occasionimg4 from "../../../Images/occasionimg4.webp"
import occasionimg5 from "../../../Images/occasionimg5.webp"
import occasionimg6 from "../../../Images/occasionimg6.webp"
export default function Shopbyoccasion() {
    let Occionbydata=[
        {
            shopbyimg:occasionimg1,
            shopbytitle:"Office"},
        {
            shopbyimg:occasionimg2,
            shopbytitle:"Travel"},
        {
            shopbyimg:occasionimg3,
            shopbytitle:"Daily Wear"  
        },
        {
            shopbyimg:occasionimg4,
            shopbytitle:"Party"    },
        {
            shopbyimg:occasionimg5,
            shopbytitle:"Date"      },
        {
            shopbyimg:occasionimg6,
            shopbytitle:"Workout"   },
    ]
  return (
    <div>


        <div className='occsiontitle'>
            <h1>Shop by Occasion</h1>
        </div>
        <div className='occasiondiv'>
        {
            Occionbydata.map((dataoccion,i)=>{
                return(
        <div >
        <ShopCategorycard shopbyimg={dataoccion.shopbyimg} shopbytitle={dataoccion. shopbytitle}/>

        </div>

                )
            })
        }




        </div>

    </div>
  )
}
