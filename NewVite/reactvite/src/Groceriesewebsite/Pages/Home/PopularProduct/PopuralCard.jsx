import React from "react";
import "./PopularCard.css";
import img1 from "../../../images/product-2-1.jpg";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "reactstrap";
export default function PopuralCard() {
  return (
    <div className="productcardmain">
      <div className="productcarddiv">
        <div className="imgwrapper">
          <img src={img1} alt="" />
        </div>
        <div className="productcardinfo">
          <p className="text-secondary">Snak</p>
          <h6>Seeds of Change Organic Quinoa, Brown, & Red Rice</h6>
          <div className="d-flex gap-1">
            {[1, 2, 3, 4, 5].map((e, i) => {
              return (
                <p key={i}>
                  {" "}
                  <Star
                    fill="yellow"
                    size={20}
                    color="yellow"
                    strokeWidth={1.75}
                    absoluteStrokeWidth
                  />
                </p>
              );
            })}
          </div>

          <p className="text-secondary">
            By<span className="text-success ms-2">NestFood</span>
          </p>

          <div  className=" d-flex justify-around align-items-center">
            <p className="text-success fw-bold">$54.85</p>
            <p className="line-through">$55.8</p>
            <Button className="d-flex  text-success gap-1" style={{backgroundColor:"#d1e7dd",border:"none"}}>
              <ShoppingCart
                size={20}
                color="#4e9768"
                strokeWidth={1.75}
                absoluteStrokeWidth
              />{" "}
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
