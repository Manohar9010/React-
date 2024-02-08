import React, { useCallback } from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'
import Displaycallback from './Displaycallback'

export default function Usecallback() {
    const [count,setCount]=useState(0)
    const [amount,setAmount]=useState(0)
      let getdata=useCallback(()=>{
        return()=>{
            for (let index = 0; index < 1000000000; index++) {
              
            }
  
            let arr=[count,count+1,count+2]
            return arr
        }
      },[count])

  return (
    <div className='text-center'>
        
        Usecallback
        <Displaycallback fun={getdata}/>
  <hr />
    <h5>count: {count}</h5>
    <Button onClick={()=>setCount(count+1)}>add</Button>
   <hr />     
    <h5>Amount: {amount}</h5>
    <Button onClick={()=>setAmount(amount+1)}>add</Button>
      

    </div>
  )
}
