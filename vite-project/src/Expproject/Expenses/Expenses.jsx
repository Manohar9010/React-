import React from 'react'
 import './Expenses.css'
 import Expenseitem from './Expenseitem'
 import Card from '../UI/Card'
export default function Expenses(props) {

  return (
    <Card className='expe-item'>

      {
        props.item.map((expense)=>{
          return <Expenseitem date={expense.date} titile={expense.title} amount={expense.amount}/>
        })
      }
      


    {/* <Expenseitem date={props.item[0].date} titile={props.item[0].title} amount={props.item[0].amount}/>
    <Expenseitem date={props.item[1].date} titile={props.item[1].title} amount={props.item[1].amount}/>
    <Expenseitem date={props.item[2].date} titile={props.item[2].title} amount={props.item[2].amount}/> */}
  
    </Card>
  )
}
