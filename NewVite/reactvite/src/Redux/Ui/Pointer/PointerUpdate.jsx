import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { inpointers } from '../../redux/Fetures/Pointer'

export default function PointerUpdate() {
    let dispach= useDispatch()
  return (
    <div>

        <Button className='bg-danger' onClick={()=>dispach(inpointers())} >Ponter_inc</Button>
    </div>
  )
}
