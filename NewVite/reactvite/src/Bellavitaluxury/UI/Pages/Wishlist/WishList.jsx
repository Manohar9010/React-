import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";
import { BadgeCheck, Star } from "lucide-react";
import { Button } from "reactstrap";
export default function WishList({ datain }) {
  const [showdata, setShowdata] = useState([]);

  const showfun = () => {
    console.log("first,",datain);
  };

  return (
    <div>
      <div className="whishmain">
        <div className="">
          <div className="bestselarmain">
            <div className="bestsellarimg">
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
            </div>
          </div>
        </div>
      </div>
      <Button onClick={showfun}>check</Button>
    </div>
  );
}
