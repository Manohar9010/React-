import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function UseoneReduser() {
  const reduser=(state,action)=>{
       if(action.activekey==="ind"){
        return {number:state.number+action.num}
       }
        else if(action.activekey==="dec"){
         return {number:state.number-action.num}
        }
        else if(action.activekey==="reset"){
          return  {number:1000  } 
        } else if(action.activekey==="ind_amt"){
            return {amount:state.amount+action.num}
        }else if(action.activekey==="dec_amt"){
          return {amount:state.amount-action.num}
      }
        
        else{
          return state
        }
  }


const[count,dispach]=useReducer(reduser,{number:1000,amount:10,})

  return (
    <div>
         <h1>Count : {count.number}</h1>
         <h1>amount: {count.amount}</h1>
           
          <Button onClick={()=>dispach({activekey:"ind",
         num:10, })}>inc</Button>
          <Button onClick={()=>dispach({activekey:"dec",
         num:10, })}>dec</Button>
          <Button onClick={()=>dispach({activekey:"reset",
          })}>reset</Button>

<br/><br/> <br/>
             
<Button onClick={()=>dispach({activekey:"ind_amt",
         num:10, })}>inc-amt</Button>
          <Button onClick={()=>dispach({activekey:"dec_amt",
         num:10, })}>dec-amt</Button>
    </div>
  )
}
