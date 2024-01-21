import axios from "axios";
import { Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function SimpleApi() {
  let [usedata, setUsedata] = useState([]);

//   const feachdata = () => {
//     axios({
//       method: "get",
//       url: "https://fakestoreapi.com/products",
//     })
//       .then((res) => {
//         console.log(res.data);
//         setUsedata(res.data);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//     console.log(Object.keys(usedata[0]));
//   };


  useEffect(()=>{
    axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      })
        .then((res) => {
          console.log(res.data);
          setUsedata(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
  },[])
  return (
    <div>
      SimpleApi
      {/* <Button onClick={feachdata}>Click</Button> */}
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {usedata.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td><img style={{height:"50px"}} src={e.image} alt="" /></td>
                  <td>{e.title}</td>
                  <td>{e.category}</td>
                  <td>{e.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
