import React from 'react'
import Bestsellers from './Sellercomponent/Bestsellers'
import ShopbyCategory from './ShopbyCategory/ShopbyCategory'
import LuxeFragrances from './LuxéFragrances/LuxeFragrances'
import MostLoved from './MostLoved/MostLoved'
import Shopbyoccasion from './Shopbyoccasion/Shopbyoccasion'
import ReallyAre from './Reallyare/ReallyAre'
import Featured from './Featured/Featured'
import HomeSlider from './Homefirstpage/HomeSlider'

export default function Home() {
  return (
    <div>
        <HomeSlider/>
        <Bestsellers/>
        <ShopbyCategory/>
        <LuxeFragrances/>
        <MostLoved/>
        <Shopbyoccasion/>
        <ReallyAre/>
        <Featured/>
    </div>
  )
}
