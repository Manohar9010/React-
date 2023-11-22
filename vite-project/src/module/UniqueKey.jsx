import React, { useState } from 'react'

export default function UniqueKey() {


    // const [count, setCount] = useState(0)
  const numbers = [1, 2, 3, 4, 5]; 
  const listItems = numbers.map((number) => <li key={number.toString()}> {number} </li> );
     console.log(listItems);
  return (
    <div>
        <h1>{listItems}</h1>
    </div>
  )
}
