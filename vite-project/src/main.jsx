import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import 'bootstrap/dist/css/bootstrap.min.css';

   let x=<h1>let's know</h1>
   let arr=["manu","mani","money"]
   let name=arr.map((e)=>{
    return <h1>{e}</h1>
   })

   let obj={
    name:"shiva",
    age:25,

   }
 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <h1>hello world</h1>
  <h1>{15+15}</h1>
  {x} */}

  {/* {name}
  <h1>{obj.name}</h1>
  <hr />
  <h1>{arr[0]}</h1>
  <h1>{arr[1]}</h1>
  <h1>{arr[2]}</h1> */}
  

  </React.StrictMode>,
)


// import React from 'react'

