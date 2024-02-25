import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function SimpleInputt1() {
  const [userdata,setUserdata]=useState({
    username:"",
    age:"",
    email:"",
    password:"",
    gender:"",
    hobbys:[],
    usertype:""
,  })
  const [resmodal, setModal] = useState(false);

  const toggle = () => setModal(!resmodal);
  const options = [
    { value: "User", label: "User" },
    { value: "Admin", label: "Admin" },
    { value: "Employee", label: "Employee" },
  ];
  let genders=["Male","Female","Kids"]
  let hobby=["Reading","Dancing","Singing","Cycling"]

  const getcheckvalue=(item)=>{
    let match=userdata.hobbys.includes(item)

    if(match){ 
          let fillterdata=userdata?.hobbys?.filter((e)=>e!==item)
          setUserdata({...userdata,hobbys:fillterdata} )
    }else{

      setUserdata({...userdata,hobbys:[...userdata?.hobbys,item]})
    }

  }

const getdata=(e)=>{
  e.preventDefault()
  if(userdata.username.length>0 && userdata.email.length>0 ){
      let josndata= localStorage.getItem("registerdata")
      let normal=JSON?.parse(josndata || "[]")
      localStorage.setItem("registerdata",JSON.stringify([...normal,userdata]))

      setUserdata({
        username:"",
        age:"",
        email:"",
        password:"",
        gender:"",
        hobbys:[],
        usertype:""
    ,  })
    toggle()
    toast.success("Your Detailes Submited")
  }else{
  alert("fill the form")
  }

}
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={resmodal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div>
            <div>
              <Form onSubmit={getdata} >
                <FormGroup>
                  <Label for="exampleEmail">User Name</Label>
                  <Input
                    id="Username"
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    value={userdata.username}
                    onChange={(e)=>setUserdata({...userdata,username: e?.target?.value})}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Age</Label>
                  <Input
                    id="UserAge"
                    name="Age"
                    placeholder="Enter Your Age"
                    type="Number"
                    value={userdata.age}
                    onChange={(e)=>setUserdata({...userdata,age: e?.target?.value})}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email"
                    value={userdata.email}
                    onChange={(e)=>setUserdata({...userdata,email: e?.target?.value})}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={userdata.password}
                    onChange={(e)=>setUserdata({...userdata,password: e?.target?.value})}
                  />
                </FormGroup>

                <FormGroup  >
                  <legend>Gender</legend>
                  <FormGroup className="d-flex gap-4 ">
                    {
                      genders.map((e,i)=>{
                        return  <FormGroup key={i} check>
                        <Input name="radio1" type="radio" 
                          value={userdata.gender}
                          onChange={( )=>setUserdata({...userdata,gender:e })}
                        
                        />{" "}
                        <Label check>{e}</Label>
                      </FormGroup>
                      })
                    }
                   
                    {/* <FormGroup check>
                      <Input name="radio1" type="radio" 
                       value={userdata.gender}
                       onChange={(e)=>setUserdata({...userdata,gender:"Female" })}
                      />{" "}
                      <Label check>Female</Label>
                    </FormGroup>
                    <FormGroup>
                      <Input name="radio1" type="radio" 
                       value={userdata.gender}
                       onChange={(e)=>setUserdata({...userdata,gender:"Kids" })}
                      />{" "}
                      <Label check>Kids</Label>
                    </FormGroup> */}
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <legend>Hoddys</legend>
                  <FormGroup className="d-flex gap-3">
                   {
                    hobby.map((e,i)=>{
                      return(
                        <FormGroup key={i} check>
                        <Input type="checkbox" 
                            onChange={()=>getcheckvalue(e)}
                        /> <Label check>{e}</Label>
                      </FormGroup>
                      )
                    })
                   }
                   
                    {/* <FormGroup check>
                      <Input type="checkbox" /> <Label check>Dancing</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input type="checkbox" /> <Label check>Singing</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input type="checkbox" /> <Label check>Cycling</Label>
                    </FormGroup> */}
                  </FormGroup>
                  <FormGroup>
                    <Select
                       onChange={(e)=>setUserdata({...userdata,usertype: e?.value})}
                      options={options}
                    />
                  </FormGroup>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
          </div>
          <p>{userdata.username}</p>
          <p>{userdata.age}</p>
          <p>{userdata.email}</p>
          <p>{userdata.password}</p>
          <p>{userdata.gender}</p>
          <p>{userdata.hobbys}</p>
          <p>{userdata.usertype}</p>
        </ModalBody>
      </Modal>
    </div>
  );
}











// import React, { useState } from 'react'
// import { Button, Input } from 'reactstrap'

// export default function SimpleInputt() {
//   const [count,setCount]=useState("");
//   const [alldata,setAlldata]=useState([]);
//   const addfun=()=>{
//     if(count.length>0){
//       let match=alldata.some((e)=>e==count)
//      if(match){
//       alert("same")
//      }else{

//        setAlldata([...alldata,count])
//        setCount("")
//      }
//     }else{
//       alert("empty input")
//     }
//   }
//   const clickhandler=(e)=>{
//     if(e.key==="Enter"){
//       addfun()
//     }
//   }

//   const getdata = () => {
//     if (inputval.length > 0) {
//       let match = pendingtask.some((e) => e === inputval);
//       console.log("match", match);
//       if (match) {
//         alert("same");
//       } else {
//         const updatedPendingTask = [...pendingtask, inputval];
//         setPendingtask(updatedPendingTask);
//         setInputval("");
//         localStorage.setItem("pendingstore", JSON.stringify(updatedPendingTask));
//         Swal.fire({
//           position: "top-center",
//           icon: "success",
//           title: "Your work has been saved",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Input value is empty!",
//       });
//     }
//   };
  
//   return (
//     <div>SingleInput

//      <Input type="text"
//      value={count}
//      onChange={(e)=>setCount(e?.target?.value)}
//      onKeyPress={clickhandler}
//      />
//      <Button onClick={addfun} >add</Button>

//      {
//       alldata.map((e,i)=>{
//         return <li>{e}</li>
//       })
//      }
//      <h1>{count}</h1>
//     </div>
//   )
// }






























// // import { Divide } from "lucide-react";
// // import React, { useState } from "react";
// // // import { ArrowRight, PencilSquare, Trash3 } from "react-bootstrap-icons";
// // // import { toast } from "react-toastify";
// // import { Button, Input, Label } from "reactstrap";

// // export default function SimpleInput() {
// //   let [task, setTask] = useState("");
// //   let [taskArray, setTaskArray] = useState([]);
// //   let [index, setIndex] = useState(null);

// //   const getData = (eleDetails) => {
// //     let inputValue = eleDetails?.target?.value;
// //     setTask(inputValue);
// //   };
// //   // convert both string into same case(lower/upper) while comparing
// //   const addTask = () => {
// //     if (task.length > 0) {
// //       let isavailable = taskArray.some((e) => e === task);
// //       console.log("-----------  isavailable----------->", isavailable);
// //       if (isavailable) {
// //        alert("same data")
// //       } else {
// //         let allData = [...taskArray, task]; // combine old + new data
// //         setTaskArray(allData);
// //         setTask(""); // to empty input value after add task
// //       }
// //     } else {
// //       alert("Please feild data");
// //     }
// //   };

// //   // delete todo
// // //   const deleteHandler = (index) => {
// // //     let ans = confirm("Are you sure ?");
// // //     console.log("-----------  ans----------->", ans);
// // //     if (ans) {
// // //       let arr = taskArray.filter((e, i) => i !== index);
// // //       setTaskArray(arr);
// // //     }
// // //   };

// // //   // updateHandler
// // //   const updateHandler = (index, element) => {
// // //     console.log("-----");
// // //     setTask(element);
// // //     setIndex(index);
// // //   };

// // //   // updateData
// // //   const updateData = () => {
// // //     console.log("---->");

// // //     // 1. updatedData = task state
// // //     // 2. array = taskarr
// // //     // 3. index = index
// // //     if (index || index === 0) {
// // //       taskArray.splice(index, 1, task);
// // //       setTaskArray([...taskArray]);
// // //       setTask("");
// // //       setIndex(null);
// // //     } else {
// // //       alert("Please select some data for update");
// // //     }
// // //   };

// //   return (
// //     <>
// //       <div className="d-flex align-items-end">
// //         <div>
// //           <Label>Add Task</Label>
// //           <Input
// //             value={task}
// //             // to controll input value
// //             onChange={(e) => getData(e)}
// //             placeholder="Enter Task"
// //           />
// //         </div>
// //         <div>
// //           {index || index === 0 ? (
// //             <Button onClick={updateData} className="ms-2">
// //               Update
// //             </Button>
// //           ) : (
// //             <Button onClick={addTask} className="ms-2">
// //               Add Task
// //             </Button>
// //           )}
// //         </div>
// //       </div>
// //       <div
// //         style={{ minWidth: "50%" }}
// //         className="border border-dark rounded-2 pe-2 mt-3"
// //       >
// //         <h1 className="text-center">Tasks List</h1>
// //         <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
// //         <ul>
// //           {taskArray.map((element, i) => {
// //             return (
// //               <>
// //                 <div key={i} className="d-flex justify-content-between ">
// //                   <li>
// //                     {i + 1}. {element}
// //                   </li>
// //                   <div>
// //                     {/* <PencilSquare
// //                       className="me-3"
// //                       style={{ cursor: "pointer" }}
// //                       onClick={() => updateHandler(i, element)}
// //                     />
// //                     <Trash3
// //                       role="button"
// //                       onClick={() => deleteHandler(i)}
// //                       color="red"
// //                     /> */}
// //                   </div>
// //                 </div>
// //                 <hr />
// //               </>
// //             );
// //           })}
// //         </ul>
// //       </div>
// //     </>
// //   );
// // }

// // // let [task, setTask] = useState("");
// // // let [taskArray, setTaskArray] = useState([]);

// // // tastArry = ["a", "b", "c", "d", "e"];
// // // index = 2;

// // // let arr = taskArray.filter((e, i) => i !== index);

// // // arr = ["a", "b", "d", "e"];
// // // taskArray= arr
// // // taskArray=["a", "b", "d", "e"];

// // let index = null;
// // function fun1(index, ele) {
// //   // get index
// //   // set index
// // }
// // function fun2(params) {
// //   // want index
// // }