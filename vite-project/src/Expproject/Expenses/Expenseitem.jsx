import React, { useState } from 'react'
import './Expenseitem.css'
import ExpenseDate from './ExpenseDate'
export default function Expenseitem(props) {
  // let [title,setTile]=useState(props.titile)
  // let [newtile,setnewtile]=useState('')
  // let [isprops,setisprops]=useState(false)
  
    // const clickhanler =()=>{
    //   setTile(newtile)
    //   // setTile(isprops ? props.titile:"user");
    //   // setisprops(!isprops)
    // }
    // const changHadler=(event)=>{
    //   setnewtile(event.target.value)
    // }
  return (
    <div className='expensive-item'>
     <div className='expensive-date'>
       <ExpenseDate date={props.date}/> 
     </div>

     <div className='expensive-descript'>
     <h2>{props.titile}</h2>
     <div className='expensive-price'>$ {props.amount}</div>    
     </div>
     {/* <input type="text" value={ newtile } onChange={changHadler}  />
        <button onClick={ clickhanler }>Change title</button> */}
        
    </div>
  )
}
