import React,{useContext} from 'react'
import { NameContaxt } from './UseContaxtCom'
export default function () {
    const data=useContext(NameContaxt)
  return (
    <div>
        <h1>My name is {data.name} </h1>
        <h1>My age is {data.age} </h1>
    </div>
  )
}
