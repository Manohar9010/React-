import React, { useState } from 'react'

export default function InputValueget() {
                  const   [user,setUser]=useState('')
                  const      [tabval,setTabval]=useState([])



                  const getinputvalue=(roo)=>{
           setUser(roo.target.value);
    }
    const adddata =()=>{
      if(user !==''){
      setTabval([...tabval,user])
      setUser('')
      }
    }

  return (
    <div style={{textAlign:"center",marginTop:"150px"}}>
      {/* <div><h1>{user}</h1></div>   */}
    <label ><h1 style={{color:"red"}}>Add Your Expenses</h1></label><br />
     <input type="text" value={user} onChange={(e)=>getinputvalue(e)} style={{ borderRadius:"10px", height:"50px",width:"300px",fontSize:"25px",color:"blue" }} />  <br />  <br />
     
     <button style={{padding:"5px 70px",borderRadius:"5px",background:"yellow",fontSize:"25px",fontWeight:"600"}} onClick={()=>adddata()} >Click </button>
                  
       { tabval.length >0 ?(
        
        <div style={{border:"2px solid black",padding:"30px",margin:" 20px auto", width:"50%" }}>
                {tabval.map((e,i)=>{
                    return <div style={{border:"2px solid red", borderRadius:"10px",color:"blue",margin:"5px",background:"yellow",fontSize:"25px"}}>
                      
                     {i+1}.{e}
                      </div>
                })

                }
        </div>) :( <h1>Please Enter Your Data</h1> ) 
} 
    </div>
  )
}
