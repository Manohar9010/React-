import React, { createContext, useState } from 'react'
import ComA from './ComA'

export const ValueChange=createContext()
export default function UseContaxtCom() {
const[names,SetNames]=useState({
  usename:"shivam",
  Age:"25",
})
  return (
    <div>
    
    UseContaxtCom
        
      <ValueChange.Provider value={names}>

        <ComA/>
      </ValueChange.Provider>
        
      
      </div>
  )
}
