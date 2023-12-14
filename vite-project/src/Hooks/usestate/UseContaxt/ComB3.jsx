import React,{useContext} from 'react'
import { ValueChange } from './UseContaxtCom'
export default function () {
    const data=useContext(ValueChange)
  return (
    <div>
     
        <h1>My name is {data.usename} </h1>
        <h1>My age is {data.Age} </h1>
    </div>
  )
}
