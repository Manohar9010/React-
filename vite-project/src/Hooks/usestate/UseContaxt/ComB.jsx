import React, { useContext } from 'react'
import ComB2 from './ComB2'
import{CityChage} from './UseContaxtCom'
export default function ComB() {
const city =useContext(CityChage)
   console.log(city)
  return (
    <div>
      {
        // console.log(city)
      }
      <h1>{city}</h1>
        <ComB2/>
    </div>
  )
}


