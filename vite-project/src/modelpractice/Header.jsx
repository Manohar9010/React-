import React, { useState } from 'react'
import { Button } from 'reactstrap'
import ModalPage from './ModalPage'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <ModalPage modal={modal} toggle={toggle}/>
<div className='d-flex justify-content-around p-4'>
    <div>

      <ul className='d-flex gap-4'>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/userpage"}>User Page</NavLink></li>
      </ul>

    </div>
    <div>
        <Button onClick={toggle}>Register</Button>
    </div>




      
</div>        
        
        
        
        
        </div>
  )
}
