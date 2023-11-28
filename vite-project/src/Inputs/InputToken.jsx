import React, { useState } from 'react'
import './InputToken.css'
export default function InputToken() {
const [vname,setVname]= useState('')
const [vnumber,setVnumber]= useState('')
const [vdate,setVdate]= useState('')
const [alldata,setAlldata]=useState([])
               


  
const Vechilname=(eve)=>{
    setVname(eve.target.value)
}
const Vechilenumber=(eve)=>{
    setVnumber(eve.target.value)
}
 const parckdate=(eve)=>{
    setVdate(eve.target.value)
 }

const printdata=()=>{
    if(vname !==''&& vnumber !=='' && vdate !==''){
    setAlldata([...alldata,{vname,vnumber,vdate}]);
    setVname('');
    setVnumber('');
    setVdate('');
    }else{
      alert("Please Enter Vehicle Detailes")
    }
}
  return (
    <div>
        
        <div className="formbody">
            <h1 style={{textAlign:"center"}}>Parcking Token</h1>
          <div>
            <div className='inpuiflex1' >
                
            <div>
            <label >Vehicle Name : </label>
             <input type="text" value={vname} onChange={(e) =>Vechilname(e)} />
          </div>
            <div>
            <label >Vehicle Number : </label>
             <input type="text" value={vnumber} onChange={(e) => Vechilenumber(e)} />
            </div>

            </div>
         
            <div className='inputdate1'>
            <label > &ensp;  &ensp;&ensp;Date : &ensp; &ensp; &ensp;</label>
             <input type="Date" value={vdate} onChange={(e)=>parckdate(e) } />
            </div>
            <div className='btn'>
                
            <button onClick={printdata} >Print Token</button>
            </div>
        </div>  
            
        </div>       
        {alldata.length>0 ?(
       <div className='datadiv'>

       {
          alldata.map((e, index)=>{
           return  <div className='tokediv'>
            <div className='tokench'>
               <h6>Vocher no: {index+1}</h6>
               </div>
               <div className='tokench'>
               <h6>Date :  {e.vdate}</h6>
               </div>
                <div className='tokench'>
                <h6>Vehicle Name : {e.vname}</h6> 
                </div>
                <div className='tokench'>
                <h6>Vehicle Number :  {e.vnumber}</h6>
                </div>
            </div>
           
        })
        
       }
       </div>)
       :( <h1 style={{textAlign:"center"}}> Please Enter Vehicle Detailes </h1>
       )}
      
   </div>
  )
}



 