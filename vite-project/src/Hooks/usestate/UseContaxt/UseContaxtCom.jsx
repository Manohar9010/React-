import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
  
export const NameContaxt= createContext();

export default function UseContaxtCom() {
     let[names,setNames]=useState({
        name:"shivam",
        age:"25",
     })
  return (
    <div>
        <NameContaxt.Provider value={names} >

        <ComA/>

        <ComB/>
        </NameContaxt.Provider>
    </div>
  )
}
