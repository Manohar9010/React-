import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'

export default function UseRedeuserCom() {
    const redeuser =(state,action)=>{
        
        if(action=="ing"){
            
            return { count: state.count + 1 };
        }else if(action=="dec"){
            return { count: state.count - 1 };
        }else if (action=="reset"){
            return  { count: state.count=1000}
        }
        
        else{
            return  { count: state.count}
        }

    }
    const[count,dispach]=useReducer(redeuser,{count :1000})
  return (
    <div>
         <h1 style={{textAlign:"center", margin:"50px 0px"}}>Count: {count.count}</h1>

        <Button onClick={()=>dispach("ing")}>inc </Button>
        <Button onClick={()=>dispach("dec")} >sub </Button>
        <Button onClick={()=>dispach("reset")} >Reset </Button>
        <Button onClick={()=>dispach("decff")} >worng </Button>
               
    </div>
  )
}



// import React, { useReducer } from 'react'
// import {Button} from 'reactstrap'
// export default function UseRedeuserCom() {
//     const reducer=(state,action)=>{
//          if(action=="ing"){
//                 return state + 1
//          }else if(action=="dec"){
//              return state -1
//          }else{
//             return state
//          }

//     }

//     const[number,dispach]=useReducer(reducer,1000)
//   return (
//     <div>
//         <h1>{number}</h1>
//         <Button onClick={()=>dispach("ing")}>inc</Button>
//         <Button onClick={()=>dispach("dec")}>dec</Button>
//         <Button onClick={()=>dispach("worng")}>wrong</Button>
       
        
//     </div>
//   )
// }
