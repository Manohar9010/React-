// // import React, { useState } from 'react';
// // import './MenuBar.css'; // Import your CSS file for styling

// // export default  UseforPractice = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <div className="menu-bar">
// //       <button onClick={toggleMenu}>Toggle Menu</button>

// //       {isMenuOpen && (
// //         <div className="menu">
// //           {/* Add your menu items or components here */}
// //           <p>Menu Item 1</p>
// //           <p>Menu Item 2</p>
// //           <p>Menu Item 3</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import {
//   Button,
//   Col,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Offcanvas,
//   OffcanvasBody,
//   OffcanvasHeader,
//   Row,
//   Table,
// } from "reactstrap";

// export default function UseforPractice() {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     gender: "",
//     hobby: [],
//     usertype: "",
//   });
//   const [alldata, setAlldata] = useState([]);
//   const [updateval, setUpdate] = useState(null);
//   let gen = ["male", "femal", "kids"];
//   let hobbys = ["reading", "singing", "dancing"];

//   let options = [
//     { value: "admin", label: "admin" },
//     { value: "user", label: "user" },
//     { value: "employe", label: "employe" },
//   ];

//   const checkboxfun = (item) => {
//     let match = user.hobby.includes(item);
//     console.log(match);
//     if (match) {
//       let fillterdata = user.hobby.filter((e, i) => e !== item);
//       setUser({ ...user, hobby: fillterdata });
//     } else {
//       setUser({ ...user, hobby: [...user.hobby, item] });
//     }
//   };

//   const getdata = (e) => {
//     e.preventDefault();

//     if (user.email.length > 0) {
//       let match = alldata.some((e) => e.email == user.email);
//       if (!match) {
//         setAlldata([...alldata, user]);
//         localStorage.setItem("trycurd", JSON.stringify([...alldata, user]));

//         setUser({
//           email: "",
//           password: "",
//           gender: "",
//           hobby: [],
//           usertype: "",
//         });
//       } else {
//         alert("same data");
//         setUser({
//           email: "",
//           password: "",
//           gender: "",
//           hobby: [],
//           usertype: "",
//         });
//       }
//     } else {
//       alert("enter data");
//     }
//   };

//   const deletefun = (item) => {
//     let filltardata = alldata.filter((e, i) => i !== item);
//     setAlldata(filltardata);
//     localStorage.setItem("trycurd", JSON.stringify(filltardata));
//   };

//   const editfun = (data, index) => {
//     setUser(data);
//     setUpdate(index);
//     console.log(data);
//   };
//   const updatefun = () => {
//     if (updateval || updateval == 0) {
//       alldata.splice(updateval, 1, user);
//       setAlldata([...alldata]);
//       setUser({
//         email: "",
//         password: "",
//         gender: "",
//         hobby: [],
//         usertype: "",
//       });
//       setUpdate(null);
//     }
//   };
//   useEffect(() => {
//     let normal = JSON.parse(localStorage.getItem("trycurd") || "[]");
//     setAlldata(normal);
//   }, []);

//   const [isopen,setIsopen]=useState(false)

//   const toogleoffcanvas=()=>{
//     setIsopen(!isopen)
//   }
//   return (
//     <div>
//       <div className="d-flex justify-content-center mt-5">
//         <div className=" w-50 border border-success p-3 rounded">
//           <Form onSubmit={getdata}>
//             <Row>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="exampleEmail">Email</Label>
//                   <Input
//                     id="exampleEmail"
//                     name="email"
//                     placeholder="with a placeholder"
//                     type="email"
//                     value={user.email}
//                     onChange={(e) =>
//                       setUser({ ...user, email: e?.target.value })
//                     }
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="examplePassword">Password</Label>
//                   <Input
//                     id="examplePassword"
//                     name="password"
//                     placeholder="password placeholder"
//                     type="password"
//                     value={user.password}
//                     onChange={(e) =>
//                       setUser({ ...user, password: e?.target.value })
//                     }
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               {gen.map((e, i) => {
//                 return (
//                   <Col md={3}>
//                     <FormGroup>
//                       <Label for="examplegender">{e}</Label>
//                       <Input
//                         id="examplegender"
//                         name="gender"
//                         type="radio"
//                         value={e}
//                         checked={user.gender === e}
//                         onChange={() => setUser({ ...user, gender: e })}
//                       />
//                     </FormGroup>
//                   </Col>
//                 );
//               })}
//             </Row>
//             <Row>
//               {hobbys.map((e, i) => {
//                 return (
//                   <Col md={3}>
//                     <FormGroup>
//                       <Label for="exampleHobbys">{e}</Label>
//                       <Input
//                         id="exampleHobbys"
//                         name="Hobbys"
//                         type="checkbox"
//                         onChange={() => checkboxfun(e)}
//                         checked={user.hobby.includes(e)}
//                       />
//                     </FormGroup>
//                   </Col>
//                 );
//               })}
//             </Row>
//             <Row>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="exampleCity">User Type</Label>
//                   <Select
//                     options={options}
//                     value={options.find((opt) => opt.value === user.usertype)}
//                     onChange={(e) => setUser({ ...user, usertype: e?.value })}
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Button>Sign in</Button> <Button onClick={updatefun}>Update</Button>
//           </Form>
//         </div>
//       </div>
//       <div className="d-flex justify-content-center mt-5">
//         <Table className="w-75" striped>
//           <thead>
//             <tr>
//               <th>Sr</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Gender</th>
//               <th>Hobbys</th>
//               <th>Usertype</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {alldata.map((e, i) => {
//               return (
//                 <tr key={i}>
//                   <th scope="row">{i + 1}</th>
//                   <td>{e.email}</td>
//                   <td>{e.password}</td>
//                   <td>{e.gender}</td>
//                   <td>{e.hobby}</td>
//                   <td>{e.usertype}</td>
//                   <td>
//                     <Button onClick={() => deletefun(i)}>Delete</Button>{" "}
//                     <Button onClick={() => editfun(e, i)}>Edit</Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>

//       <div  >
//   <Button
//     color="primary"
//     onClick={toogleoffcanvas}
//   >
//     Open
//   </Button>
//   <Offcanvas isOpen={isopen} toggle={toogleoffcanvas}>
//     <OffcanvasHeader toggle={toogleoffcanvas}>
//       Offcanvas
//     </OffcanvasHeader>
//     <OffcanvasBody  >
//       <strong>
//         This is the Offcanvas body.kbjkbkj;k
//       </strong>
//     </OffcanvasBody>
//   </Offcanvas>
// </div>
//     </div>
//   );

// }

// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Modal,
//   ModalBody,
//   ModalHeader,
// } from "reactstrap";
//  import"./Userpractice.css"
// export default function UseforPractice(args) {
//   const [reviewvalue, setReviewvalue] = useState({
//     title: "",
//     description: "",
//     rating: "",
//   });
//   const [colourchange,setColourchange]=useState("")
//   const [allreviewdata, setAllreviewdata] = useState([]);
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   const ReviewStorefun = (e) => {
//     e.preventDefault;
//     if (reviewvalue.title.length > 0) {
//       setAllreviewdata([...allreviewdata, reviewvalue]);
//       localStorage.setItem(
//         "Storyreview",
//         JSON.stringify([...allreviewdata, reviewvalue])
//       );
//     } else {
//       alert("Please Give Your Review");
//     }
//   };

//   const ReviewResetfun = () => {
//     setReviewvalue({
//       title: "",
//       description: "",
//       rating: "",
//     });
//     document.querySelectorAll(".ratingstar > div").forEach((star) => {
//       star.style.WebkitTextFillColor = "white";
//     });
//   };
//   useEffect(() => {
//     let normaldata = JSON.parse(localStorage.getItem("Storyreview") || "[]");

//     setAllreviewdata(normaldata);
//   }, []);

//   const ReviewDeletefun =(indexval)=>{
//      const fillterdata   = allreviewdata.filter((e,i)=> i !== indexval)
//      setAllreviewdata(fillterdata)
//   }
  


// const Ratingfun = (index) => {
//   // Determine the color to set for the stars
//   const color = "yellow";

//   // Loop through all stars and set their color based on the index
//   document.querySelectorAll(".ratingstar > div").forEach((star, i) => {
//     if (i < index) {
//       star.style.WebkitTextFillColor = color;
//     } else {
//       star.style.WebkitTextFillColor = "white";
//     }
// setReviewvalue({...reviewvalue,rating:i})
// console.log("first",reviewvalue.rating)
//   });

//   // Update the state to reflect the selected rating
//   setReviewvalue({ ...reviewvalue, rating: index });
// };

// const getStars = (rating) => {
//   const stars = Array.from({ length: rating }, (_, index) => (
//     <span key={index} style={{ color: 'yellow', fontSize: '25px' }}>&#9733; </span>
//   ));
//   return stars;
// };
//   return (
//     <div>
//       <div
//         className="d-flex"
//         style={{ marginRight: "650px", marginLeft: "50px" }}
//       >
//         <img
//           src={
//             "https://img.freepik.com/premium-vector/bird-cartoon-branch_119631-154.jpg?w=900"
//           }
//           alt=""
//           style={{ width: "300px" }}
//         />

//         <h5 className="mt-5 ms-4">
//           A bird sitting on a tree is never afraid of the branch breaking,
//           because her trust is not in the branch but in her own wings. Always
//           believe in Yourself.
//         </h5>
//       </div>

//       <div>
//         <div style={{ marginLeft: "50px" }}>
//           <Button color="danger" onClick={toggle}>
//             Click For Give Review
//           </Button>
//           <Modal isOpen={modal} toggle={toggle} {...args}>
//             <ModalHeader toggle={toggle}>Place Your Review</ModalHeader>
//             <ModalBody>
//               <Form onSubmit={ReviewStorefun}>
//                 <FormGroup>
//                   <Label for="Title">Title</Label>
//                   <Input
//                     id="Title"
//                     name="Title"
//                     placeholder="Give Your Title"
//                     type="text"
//                     value={reviewvalue.title}
//                     onChange={(e) =>
//                       setReviewvalue({
//                         ...reviewvalue,
//                         title: e?.target?.value,
//                       })
//                     }
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label for="Description">Description</Label>
//                   <Input
//                     id="Description"
//                     name="Description"
//                     type="textarea"
//                     value={reviewvalue.description}
//                     onChange={(e) =>
//                       setReviewvalue({
//                         ...reviewvalue,
//                         description: e?.target?.value,
//                       })
//                     }
//                   />
//                 </FormGroup>

//                 <FormGroup >
//                   {/* <Input type="checkbox" /> */}
//                   <Label for="Description" style={{margin:0}}>Rating</Label>
//                   <div className="ratingstar  d-flex">
                   
               
//                   <div className="star1" onClick={()=>Ratingfun(1)} style={{fontSize:"40px",cursor:"pointer",WebkitTextFillColor: colourchange}}>
//                    &#9733;
//                   </div>
//                   <div className="star2"  onClick={()=>Ratingfun(2)} style={{color:"red",fontSize:"40px",cursor:"pointer" ,WebkitTextFillColor: colourchange}}>
//                    &#9733;
//                   </div>
//                   <div className="star3" onClick={()=>Ratingfun(3)} style={{color:"red",fontSize:"40px",cursor:"pointer" ,WebkitTextFillColor: colourchange}}>
//                    &#9733;
//                   </div>
//                   <div className="star4" onClick={()=>Ratingfun(4)} style={{color:"red",fontSize:"40px",cursor:"pointer" ,WebkitTextFillColor: colourchange}}>
//                    &#9733;
//                   </div>
//                   <div className="star5" onClick={()=>Ratingfun(5)} style={{color:"red",fontSize:"40px",cursor:"pointer" ,WebkitTextFillColor: colourchange}}>
//                    &#9733;
//                   </div>
//                   </div>
                  
//                 </FormGroup>
//                 <FormGroup className="d-flex gap-5 mt-4">
//                   <Button>Submit</Button>
//                   <Button onClick={ReviewResetfun}>Reset</Button>
//                 </FormGroup>
//               </Form>
//             </ModalBody>
//           </Modal>
//         </div>

//         <div className="border-2 mx-5 w-50 p-1 mt-3 showdata">
//           {allreviewdata.map((e, i) => {
//             return (
//               <div key={i} className="border p-3 d-flex mb-1 justify-content-between ">
//                 <div>

//                 <div>Title: {e.title}</div>
//                 <div>Description: {e.description}</div>
//                 <div>Rating: {getStars(e.rating)}</div>
//                 </div>
//                 <div>
//                   <Button onClick={()=>ReviewDeletefun(i)}>delete</Button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>


//       <div>
        
//       </div>
//     </div>
//   );
// }


// import { Search } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { Button, Input, InputGroup } from 'reactstrap'

// export default function UseforPractice() {

// let initialData=["hleeo","ho","jooo","hpppp"]
//        const [data,setData]=useState(initialData)
//        const [seacrh,setSearch]=useState("")
//        const [filteredData, setFilteredData] = useState(initialData);

//        useEffect(()=>{
//         if (seacrh.length === 0) {
//           setFilteredData(data);
//         }else{
//             let filldata=data.filter((e,i)=> e.includes(seacrh))
//             setFilteredData (filldata)
//         }
            
//        },[seacrh,data])

//      useEffect(()=>{

//      })
//   return (
//     <div>
      
//       <div className='w-50 mt-5'>
//         <InputGroup >
        
//         <Input className='w-24' type='text' onChange={(e)=>setSearch(e?.target?.value)}/>
//         <Button> <Search /></Button>
       
//         </InputGroup>
//       </div>
      
      
//     {
//       filteredData.map((e,i)=>{
//         return(
//           <li>{e}</li>
//         )
//       })
//     }





//     </div>
//   )
// }
import  React, { useState } from 'react';

export default function UseforPractice() {
  const [divColors, setDivColors] = useState(["white", "white", "white"]);

  const handleDivClick = (index) => {
    const newColors = [...divColors];
    newColors[index] = newColors[index] === "white" ? "blue" : "white";
    setDivColors(newColors);
  };

  return (
    <div>
      <div
        className='w-60 border border-gray-700'
        onClick={() => handleDivClick(0)}
        style={{ backgroundColor: divColors[0], height: '100px', cursor: 'pointer' }}
      >
        Div 1
      </div>
      <div
        className='w-60 border border-gray-700 mt-2'
        onClick={() => handleDivClick(1)}
        style={{ backgroundColor: divColors[1], height: '100px', cursor: 'pointer' }}
      >
        Div 2
      </div>
      <div
        className='w-60 border border-gray-700 mt-2'
        onClick={() => handleDivClick(2)}
        style={{ backgroundColor: divColors[2], height: '100px', cursor: 'pointer' }}
      >
        Div 3
      </div>
    </div>
  );
}


