// import React, { useEffect, useState } from "react";
// import "../Wishlist/WishList.css";
// import { BadgeCheck, Star } from "lucide-react";
// import {
//   Button,
//   FormGroup,
//   Input,
//   Offcanvas,
//   OffcanvasBody,
//   OffcanvasHeader,
// } from "reactstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllproduct } from "../../../../Redux/Fetures/ProductSlice/ProductSlice";
// export default function WishList({ datain }) {
//   const [showdata, setShowdata] = useState([]);
//   const [refetch, setRefetch] = useState(true);
//   const intialState = {};
//   const [filtersate, setFiltersate] = useState({
//     range: 0,
//     valium: [],
//     gender: [],
//   });
//   const refetchData = () => setRefetch(!refetch);

//   let dispach = useDispatch();
//   let wishdata = useSelector((state) => state.ProductSlice);
//   const [isopen, setIsopen] = useState(false);

//   const toogleoffcanvas = () => {
//     setIsopen(!isopen);
//   };
//   useEffect(() => {
//     setShowdata(wishdata?.product?.data);
//   }, [wishdata]);
//   useEffect(() => {
//     dispach(getAllproduct());
//     refetchData();
//   }, []);
//   let img1 =
//     "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";
//   let quantity = ["100ml", "250ml", "350ml"];
//   let gender = ["Male", "Female"];
//   // console.log("first",filtersate.valium)
//   const valumcheckhandlar = (item) => {
//     let match = filtersate.valium.includes(item);
//     if (match) {
//       let fillerdata = filtersate?.valium?.filter((e) => e !== item);
//       setFiltersate({ ...filtersate, valium: fillerdata });
//     } else {
//       setFiltersate({ ...filtersate, valium: [...filtersate?.valium, item] });
//     }
//   };

//   const gendercheckhandler = (item) => {
//     let match = filtersate?.gender?.includes(item);
//     if (match) {
//       let fillterdata = filtersate?.gender?.filter((e) => e !== item);
//       setFiltersate({ ...filtersate, gender: fillterdata });
//     } else {
//       setFiltersate({ ...filtersate, gender: [...filtersate?.gender, item] });
//     }
//   };
//   //  console.log("first=====>",filtersate.gender)
//   const removeallfilterhandler = () => {
//     setFiltersate({
//       range: 0,
//       valium: [],
//       gender: [],
//     });
//   };
//   return (
//     <div>
//       <div></div>
//       <div className="whishmain">
//         <div>
//           <div
//             className="border h-8 w-40 ms-5 text-center cursor-pointer"
//             onClick={toogleoffcanvas}
//           >
//             filter
//           </div>

//           <Offcanvas isOpen={isopen} toggle={toogleoffcanvas}>
//             <OffcanvasHeader toggle={toogleoffcanvas}>
//               Offcanvas
//             </OffcanvasHeader>
//             <OffcanvasBody>
//               <strong>
//                 <div>
//                   <h6>Rate Between</h6>
//                   <Input
//                     type="range"
//                     onChange={(e) =>
//                       setFiltersate({
//                         ...filtersate,
//                         range: e?.target?.value * 10,
//                       })
//                     }
//                   />
//                   <h6>{filtersate.range}</h6>
//                 </div>
//                 <div>
//                   <h6>Size</h6>
//                   <div className="d-flex gap-3">
//                     {quantity.map((e, i) => {
//                       return (
//                         <FormGroup className="d-flex gap-2" key={i}>
//                           <Input
//                             type="checkbox"
//                             checked={filtersate.valium.includes(e)}
//                             onChange={() => valumcheckhandlar(e)}
//                           />
//                           <label htmlFor="">{e}</label>
//                         </FormGroup>
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <div>
//                   <h6>Gender</h6>
//                   {gender.map((e, i) => {
//                     return (
//                       <FormGroup key={i} className="d-flex gap-2">
//                         <Input
//                           type="checkbox"
//                           checked={filtersate.gender.includes(e)}
//                           onChange={() => gendercheckhandler(e)}
//                           name="gender"
//                         />
//                         <label htmlFor="">{e}</label>
//                       </FormGroup>
//                     );
//                   })}
//                 </div>
//                 <div>
//                   <Button className="bg-dark" onClick={removeallfilterhandler}>
//                     Remove All Fillters
//                   </Button>
//                 </div>
//               </strong>
//             </OffcanvasBody>
//           </Offcanvas>
//         </div>
//         <div className="">
//           <div className="bestselarmain ">
//             {showdata?.map?.((e, i) => {
//               return (
//                 <div key={i} className="mt-3 ">
//                   <div className="d-flex justify-center">
//                     <img src={e.thumbnail || img1} alt="" className="rounded" />
//                   </div>
//                   <div className="text-center">
//                     {/* <h6>{e.brand}</h6> */}
//                     <h6> {e.title}</h6>
//                     <p>{e.description}</p>
//                     <h6>
//                       {" "}
//                       <span className="text-green-600">
//                         {"-" + e.discountPercentage + "%"}
//                       </span>{" "}
//                       <span>
//                         {-((e.price * e.discountPercentage) / 100 - e.price)}{" "}
//                       </span>{" "}
//                       <span style={{ textDecoration: "line-through" }}>
//                         {e.price}
//                       </span>{" "}
//                     </h6>

//                     <Button className="bg-dark w-50">ADD CART</Button>
//                   </div>
//                 </div>
//               );
//             })}
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
