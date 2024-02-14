import React from 'react'
import CountDisplay from './CountDisplay'
import CountUpdate from './CountUpdate'

export default function Count() {
  return (
    <div className='text-center mt-lg-5'>

        <CountDisplay/>
        <hr />
        <CountUpdate/>

    </div>
  )
}
