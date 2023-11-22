import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
     const [enterTitle,setEnterTitle]=useState('')
     const [enterAmount,setEnterAmount]=useState('')
     const [enteradte,setEnterDtae]=useState('')
    const titleChangeHandler=(event)=>{
        setEnterTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnterAmount(event.target.value)
    
    }
    const dateChangeHandler=(event)=>{
        setEnterDtae(event.target.value)
    }
    const subminthandler=(event) =>{
            event.preventDefault();
            const expenceData ={
                title:enterTitle,
                amount:enterAmount,
                date: new Date(enteradte)
            }

            props.onSaveExpenseDate(expenceData)
            console.log(expenceData);
            setEnterTitle('')
            setEnterAmount('')
            setEnterDtae('')
            
    } 
  return (
    <div>
        <form onSubmit={subminthandler}>
          <div className='new-expence__cintrols' >
              <div className='new-expence__cintrol'>
                <label htmlFor="">Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler} />
              </div>
              <div className='new-expence__cintrol'>
                <label htmlFor="">Amount</label>
                <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
              </div>
              <div className='new-expence__cintrol'>
                <label htmlFor="">Date</label>
                <input type="date" value={enteradte} onChange={dateChangeHandler} />
              </div>

          </div>
             <div className='new-expence__actions'>
                <button type='submit'>Add Expense</button>
             </div>
        </form>
        
    </div>
  )
}

