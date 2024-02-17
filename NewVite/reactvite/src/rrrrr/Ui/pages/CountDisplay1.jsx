import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay1() {
 let data=  useSelector((store)=>{
      return store.COUNT
  })
  return (
    <div className='text-center'>
    
<h1>Count: {data.count}</h1>
    </div>
  )
}
