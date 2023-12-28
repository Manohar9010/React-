import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderTask1 from './HeaderTask1'
import Home from '../Home'
import SuperAdimTask1 from './SuperAdimTask1'
import Admintask1 from './Admintask1'
import EmployeTask1 from './EmployeTask1'
import Usertask1 from './Usertask1'
import Profiletask1 from './Profiletask1'
import {Adminttask1, Empoyeetask1, Protecttask1,} from './Protecttask1'
export default function ProtectRoutTask1() {
  return (
    <div>
     <BrowserRouter>
     <HeaderTask1/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/superadimTask1' element={<Protecttask1  componentsupr={<SuperAdimTask1/> }  />} />
        <Route path='/admintask1' element={<Adminttask1 componentsupr={<Admintask1/>} />}/>
        <Route path='/employetask1'  element={<Empoyeetask1 componentsupr={<EmployeTask1/>} />} />
        <Route path='usertask1'  element={<Usertask1 componentsupr={<Usertask1/>} />}  />
        <Route path='profiletask1' element={<Profiletask1/>}/>
          


        </Routes>
     </BrowserRouter>



    </div>
  )
}
