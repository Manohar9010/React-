import React, { useState } from 'react'

export default function UseFor() {
  const [newname,newsetName]=useState('')
    const [name,setName]=useState('hi')
    var name1="shiva"
      const gstname=(event)=>{
        setName(event.targe.value)
           
        
      }   
      const clickone =()=>{
        setName("hello")
        console.log("clickone  name1:", name1)
        
      }

  return (
    <div>
      <h1>{name1}</h1>
    <input type="text" value={newname}  onChange={gstname} />

       <button onClick={clickone} >submit</button>
    </div>
  )
}
