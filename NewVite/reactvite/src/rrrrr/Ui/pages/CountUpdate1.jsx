import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { inone } from '../../Feature/Count'

export default function CountUpdate1() {
  let dispath=useDispatch()

  return (
    <div className='d-flex justify-content-center'>

      <Button onClick={()=>dispath(inone())}>Click</Button>
    </div>
  )
}
