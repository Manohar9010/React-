import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";
import { BadgeCheck, Star } from "lucide-react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllproduct } from "../../../Redux/Fetures/ProductSlice/ProductSlice";
export default function WishList({ datain }) {
  const [showdata, setShowdata] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const refetchData = () => setRefetch(!refetch);
  const showfun = () => {
    console.log("first,", datain);
  };
  let dispach = useDispatch();
  let wishdata = useSelector((state) => state.ProductSlice);

  useEffect(() => {
    setShowdata(wishdata?.product?.data);
  }, [wishdata]);
  useEffect(() => {
    dispach(getAllproduct());
    refetchData();
  }, []);
  let img1 =
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";
  return (
    <div>
      <div className="whishmain">
        <div className="">
          <div className="bestselarmain ">
            {showdata?.map?.((e) => {
              return (
                <div className="mt-3 border">
                  <div className="d-flex justify-center">
                    <img src={e.thumbnail || img1} alt="" />
                  </div>
                  <div className="text-center">
                    <h6>{e.brand}</h6>
                    <h6>{e.category}</h6>
                    <h6>{e.title}</h6>
                    <h6>{e.price}</h6>
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
