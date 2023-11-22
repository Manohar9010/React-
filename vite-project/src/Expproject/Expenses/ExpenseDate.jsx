import React from 'react'
import './ExpenseDate.css'
export default function ExpenseDate(props) {

    const month =props.date.toLocaleString('en-US', {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-UG',{day:'2-digit'});
  return (
    <div className='expen-date'> 
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
    </div>
  )
}
