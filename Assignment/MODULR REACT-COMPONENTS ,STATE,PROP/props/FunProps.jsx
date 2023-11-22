import React from 'react'

export default function FunProps({name,age,color}) {
    return (
      <div>
       <h1 style={{color:color}}>my name is  {name}</h1>
       <h1>my age is {age}</h1>
       
  
      </div>
    )
  }



// export default function FunProps(props) {
//   return (
//     <div>
//      <h1 style={{color:props.color}}>my name is  {props?.name}</h1>
//      <h1>my age is {props?.age}</h1>
     

//     </div>
//   )
// }
