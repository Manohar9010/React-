import React, { useContext } from 'react'
import ComB2 from './ComB2'
import{CityChage} from './UseContaxtCom'
export default function ComB() {
let {city}=useContext(CityChage)
  return (
    <div>
      <h1>{city}</h1>
        <ComB2/>
    </div>
  )
}
