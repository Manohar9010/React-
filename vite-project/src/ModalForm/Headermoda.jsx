import React, { useState } from 'react'
import { Button } from 'reactstrap'
import ModelPage from './ModelPage'

export default function Headermoda() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (
    <div className='d-flex justify-content-around py-3'>
        
        
<div>
<ModelPage modal={modal} toggle={toggle}/>
    
    <ul className='d-flex gap-5'>
        <li>Home</li>
        <li>UserPage</li>
    </ul>
    </div>        
    <div>
        <Button onClick={toggle}>Register</Button>
    </div>
        
        
        </div>
  )
}
