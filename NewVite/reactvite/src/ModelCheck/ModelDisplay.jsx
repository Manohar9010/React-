import React, { useState } from 'react'
import ModelForm from './ModelForm'
import ModelTable from './ModelTable'

export default function ModelDisplay() {
    const [modal1, setModal1] = useState(false);

const toggle1 = () => setModal1(!modal1);
  return (
    <div>


        <ModelForm/>
        <ModelTable modal1={modal1} setModal1={setModal1} toggle1={toggle1}/>
    </div>
  )
}
