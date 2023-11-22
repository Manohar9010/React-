import React, { useState } from 'react'
import Expenses from './Expenses'
import NewExpense from '../NewExpenses/NewExpense';

let Dummy_Expenses=[

    
  {
      id:'e1',
     title:'Shool Fee',
     amount:950,
     date:new Date(2021 , 5, 12)
  },
  {
      id:'e2',
     title:'Books Fee',
     amount:550,
     date:new Date(2021 , 4, 20)
  },
  {
      id:'e3',
     title:'House Rent',
     amount:750,
     date:new Date(2021 , 3, 10)
  }
]

export default function ExpApp(props) {
// let expenseDate=new Date(2023, 9, 3);
// let expenseTitle="Shool fee";
// let expenseAmount=300;

const [useExpenses,setuseExpense]=useState(Dummy_Expenses)

const addExpensHandler=(addexpenses)=>{
  const updatedExpenses=[addexpenses,...useExpenses]
  setuseExpense(updatedExpenses);
}
  return (
    <div>
        <h2></h2>
        <NewExpense onAddExpenses=
        {addExpensHandler}/>
   <Expenses item={useExpenses}/>
  

    </div>
  )
}
