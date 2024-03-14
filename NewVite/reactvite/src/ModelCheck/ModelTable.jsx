import React from 'react'
import ModelPreview from './ModelPreview'

export default function ModelTable({modal1,setModal1,toggle1}) {
  return (
    <div>


        <ModelPreview modal1={modal1} setModal1={setModal1} toggle1={toggle1}/>
    </div>
  )
}
