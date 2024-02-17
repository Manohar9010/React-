import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { oning } from '../../redux/Fetures/Amout'

export default function AmountUpdate() {
    let dispach = useDispatch()
  return (
    <div>


        <Button className='bg-danger' onClick={()=>dispach(oning())}>Amount_inc</Button>
    </div>
  )
}
