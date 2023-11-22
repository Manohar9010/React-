import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {
  const saveExpenseDataHandler =(enterExpensesData)=>{
    const expensData=
    {
        ...enterExpensesData,
        id:Math.random().toString()
    }
    props.onAddExpenses(expensData)
         console.log(expensData);
  }
   
  return (
    <div className='new_expense'>
        
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
    </div>
  )
}
