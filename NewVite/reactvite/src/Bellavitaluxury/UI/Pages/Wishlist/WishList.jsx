import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";
import { BadgeCheck, Star } from "lucide-react";
import { Button, FormGroup, Input, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllproduct } from "../../../Redux/Fetures/ProductSlice/ProductSlice";
export default function WishList({ datain }) {
  const [showdata, setShowdata] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [filtersate,setFiltersate]=useState({
    range:0
  })
  const refetchData = () => setRefetch(!refetch);
  const showfun = () => {
    console.log("first,", datain);
  };
  let dispach = useDispatch();
  let wishdata = useSelector((state) => state.ProductSlice);
  const [isopen,setIsopen]=useState(false)

  const toogleoffcanvas=()=>{
    setIsopen(!isopen)
  }
  useEffect(() => {
    setShowdata(wishdata?.product?.data);
  }, [wishdata]);
  useEffect(() => {
    dispach(getAllproduct());
    refetchData();
  }, []);
  let img1 =
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";
    console.log("first",filtersate.range)
  return (
    <div>
      <div>
      
      </div>
      <div className="whishmain">
      <div  >
        <div className="border h-8 w-40 ms-5 text-center cursor-pointer" onClick={toogleoffcanvas}>
             filter
        </div>
 
  <Offcanvas isOpen={isopen} toggle={toogleoffcanvas}>
    <OffcanvasHeader toggle={toogleoffcanvas}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody  >
      <strong>
        <div>

        <h6>Rate Between</h6>
        <Input type="range"  onChange={(e)=>setFiltersate({...filtersate,range:e?.target?.value*100})} />
        <h6>{filtersate.range}</h6>
        </div>
        <div>
          <h6>Size</h6>
          <div className="d-flex gap-3">

          
          <FormGroup className="d-flex gap-2">

          <Input type="checkbox"/>
          <label htmlFor="">100m1</label>
          </FormGroup>
          <FormGroup className="d-flex gap-2">

          <Input type="checkbox"/>
          <label htmlFor="">250m1</label>
          </FormGroup>
          <FormGroup className="d-flex gap-2">

          <Input type="checkbox"/>
          <label htmlFor="">350m1</label>
          </FormGroup>
          </div>
        </div>
        <div>
          <h6>Gender</h6>
          <FormGroup className="d-flex gap-2">

          <Input type="radio" name="gender"/>
          <label htmlFor="">Male</label>
          </FormGroup>
          <FormGroup className="d-flex gap-2">

          <Input type="radio"name="gender"/>
          <label htmlFor="">Female</label>
          </FormGroup>
        </div>
      </strong>
    </OffcanvasBody>
  </Offcanvas>
</div>
        <div className="">
          <div className="bestselarmain ">
            {showdata?.map?.((e) => {
              return (
                <div className="mt-3 ">
                  <div className="d-flex justify-center">
                    <img src={e.thumbnail || img1} alt="" className="rounded" />
                  </div>
                  <div className="text-center">
                    {/* <h6>{e.brand}</h6> */}
                    <h6> {e.title}</h6>
                    <p>{e.description}</p>
                    <h6> <span className="text-green-600">{"-"+e.discountPercentage +"%"}</span> <span>{(e.price*e.discountPercentage/100 -e.price)} </span>     <span style={{textDecoration:"line-through"}}>{e.price}</span> </h6>

                    <Button>ADD CART</Button>
                  </div>
                </div>
              );
            })}
            {/* <div className="bestsellarimg">
              <img  alt="" />
            </div>
            <div className="bestsellartext">
              <p className="m-0 p-0">{}</p>
              <h6>{}</h6>
              <p>
                <Star fill="#f2eb07" color="#f2eb07" />
                {}
                <BadgeCheck color="#16d1e9" />
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <Button onClick={showfun}>check</Button>
    </div>
  );
}
