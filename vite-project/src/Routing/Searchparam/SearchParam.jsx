import React, { useState } from "react";
import { Table } from "reactstrap";
import { Camera, Eye } from "lucide-react";
import ModelSearch from "./ModelSearch";
import { useSearchParams } from "react-router-dom";

export default function SearchParam() {

  let detailes = [
    { name: "Sukumar", age: 24, city: "Surat" },
    { name: "Sundar", age: 26, city: "valsad" },
    { name: "Suresh", age: 25, city: "Navsari" },
  ];
       
    const[searchparam,setSearchparam]= useSearchParams()
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    
    const passdata=(e)=>{
      toggle()
      setSearchparam(e)
    }
    
    return (
      <div className="  " style={{height:"60vh", }}>
      <Camera color="red" size={48} />
      <ModelSearch  modal={modal} toggle={toggle} />
      <Table   className="table-info">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {detailes.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td>
                  <Eye  className="text-dark"   onClick={()=>passdata(e)}  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
