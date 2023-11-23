import React from 'react'

export default function IndexUsekey({ names }) {
  return (
    <div>
<ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>


    </div>
  )
}
