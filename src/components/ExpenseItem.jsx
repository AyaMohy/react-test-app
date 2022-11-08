import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
export default function ExpenseItem(props) {

//   const month=props.date.toLocalString('en-US',{month:'long'})
//   const day=props.date.toLocalString('en-US',{day:'2-digit'})
//   const year=props.date.getFullYear()
// console.log(month)
  return (
    <div className='expense-item'>
        {/* <div>{expenseDate.toISOString()}</div> */}
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount }</div>
        </div>
    </div>
  )
}
