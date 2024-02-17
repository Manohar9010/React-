import React from 'react'
import { useSelector } from 'react-redux'

export default function AmountDispaly() {
    let data= useSelector((store)=>{
        console.log("amountstore",store)
        return store.amountReduser.amount
    })
  return (
    <div>
        

        <h1>Amount: {data}</h1>
    </div>
  )
}
