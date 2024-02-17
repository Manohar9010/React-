import React from 'react'
import AmountDispaly from './AmountDispaly'
import AmountUpdate from './AmountUpdate'

export default function Amount() {
  return (
    <div className='text-center mt-5'>
    <hr />
        <AmountDispaly/>
        <AmountUpdate/>
    </div>
  )
}
