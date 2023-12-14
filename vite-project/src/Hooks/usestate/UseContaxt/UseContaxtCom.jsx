import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export const ValueChange=createContext()
export const CityChage=createContext() 
export default function UseContaxtCom() {
const[names,SetNames]=useState({
  usename:"shivam",
  Age:"25",
})
const [city,setCity]=useState("surat")
  return (
    <div>
    
    UseContaxtCom
        
      <ValueChange.Provider value={names}>

        <ComA/>
        <CityChage.Provider value={{city: city}}>
          <ComB/>
        </CityChage.Provider>

      </ValueChange.Provider>
        
      
      </div>
  )
}
