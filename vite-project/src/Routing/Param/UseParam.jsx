import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'
export default function UseParam() {

  const navigate= useNavigate()
    let userdetaile=[{name:"Madhav",age:25,city:"surat"},{name:"Mani",age:27,city:"surat"},{name:"Goapl",age:24,city:"surat"}]
  return (
    <div className='mt-5 px-5 bg-info-subtle' style={{height:"500px",textAlign:"center",paddingTop:"100px"}}>
        
        <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    {
      userdetaile.map((e,i)=>{
         return(<tr key={i}> 
          <th scope="row">
            {i+1}
          </th>
          <td role='button' onClick={()=>navigate(`/username/${e.name}`)}>
            {e.name}
          </td>
          <td>
            {e.age}
          </td>
          <td>
           {e.city}
          </td>
        </tr>)
      })
    }
    
  
  </tbody>
</Table>


    </div>
  )
}
