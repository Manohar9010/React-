import React, { useMemo, useState } from 'react'
import { Button } from 'reactstrap'


let getdata=(count)=>{

        for (let index = 0; index < 1000000000; index++) {
            
        }
        let arr=[count,count+1,count+2]

        return arr
    }

export default function UseMemohook() {
    const [count ,setCount]=useState(0)
    const[amount,setAmount]=useState(0)


     let printarr=useMemo(()=>{
        return getdata(count)
     },[count])





    // =====> type 2  <======

    // let printarr=useMemo(()=>{
       

    //         for (let index = 0; index < 1000000000; index++) {
                
    //         }
    //         let arr=[count,count+1,count+2]
    
    //         return arr
    //     },[count])
    
//   =========>  type 2 end <======

//    ======>  type 1 <======
    // let getdata=()=>{

    //     for (let index = 0; index < 1000000000; index++) {
            
    //     }
    //     let arr=[count,count+1,count+2]

    //     return arr
    // }
    
    //   let printarr=useMemo(getdata,[count]) 

    // ========> type 1 end <======

  return (
    <div className='text-center mt-5'>UseMemohook

    <h5>count:{printarr[0]}</h5>
    <h5>count=+1==:{printarr[1]}</h5>
    <h5>count==+2==:{printarr[2]}</h5>
    
<hr />
      <h3>Count: {count}</h3>
       <Button onClick={()=>setCount(count+1)}>Add</Button>
<hr />
      <h3>Count: {amount}</h3>
       <Button onClick={()=>setAmount(amount+1)}>Add</Button>
    </div>
  )
}
