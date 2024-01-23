import React from 'react'
import './ExplrePageone.css'
import Explorepageonecard from './Explorepageonecard'
import { BusFront, HeartHandshake, Hotel, Plane, Shuffle, Smile } from 'lucide-react'

export default function ExplorePage1() {
  let exploretitle=["Air Service","Bus Service","Tourist Guide","Guide Service","Travel Insurance","Hotel Service"]
 
  return (
    <div className='mx-5 my-5 ' >
      <div className='d-flex gap-5 mb-5'style={{margin:"0px 100px"}}>
        <Explorepageonecard expolreicon={<Plane size={20} color="white" fill="white" />} exploretitle={exploretitle[0] }/>
        <Explorepageonecard expolreicon={<BusFront color="#f3eded" />} exploretitle={exploretitle[1] }/>
        <Explorepageonecard expolreicon={<HeartHandshake color="#fbf4f4" />} exploretitle={exploretitle[2] }/>

      </div>
<div className='d-flex gap-5' style={{margin:"0px 100px"}}>
<Explorepageonecard expolreicon={<Shuffle color="#fff5f5" />} exploretitle={exploretitle[3] }/>
<Explorepageonecard expolreicon={<Smile color="#faf5f5" />} exploretitle={exploretitle[4] }/>
<Explorepageonecard expolreicon={<Hotel color="#fdfcfc" />} exploretitle={exploretitle[5] }/>

</div>


    </div>
  )
}
