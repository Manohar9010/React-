import React from "react";
import "./PopularCard.css";
import img1 from "../../../images/product-2-1.jpg";
import { Eye, GitCompareArrows, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "reactstrap";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';




export default function PopuralCard({tagname}) {

 
  return (
    <div className="productcardmain">
      <div className="productcarddiv">
        <div className="imgwrapper">
          {
            tagname !==null && tagname !==undefined &&  tagname !== "" && 
          <div className={`tagdiv ${tagname}`}>{tagname}</div>
          }
          <NavLink>

          <img src={img1} alt="" />
          </NavLink>

          <div className="overlay">
               <ul className="d-flex">
                <li>
                <Tooltip title="Add To Wishlist" placement="top">
                  <a href="">

                  <Heart size={20}/>
                  </a>
                  </Tooltip>
                  </li>
                <li>
                <Tooltip title="comapare" placement="top">
                  <a href="">

                  <GitCompareArrows  size={20} />
                  </a>
                  </Tooltip>
                  </li>
                <li>
                <Tooltip title="Quick view" placement="top" sx={{ bgcolor: 'red' }}>
                  <a href="">

                  <Eye size={20}  />
                  </a>
                  </Tooltip>
                  </li>
               </ul>
          </div>
        </div>
        <div className="productcardinfo">
          <p className="tagname" style={{ fontSize: "15px" }}>
            snak
          </p>
          <h6 className="carddeiscription">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h6>
          <div className="d-flex gap-1">
      
            <Rating name="half-rating" defaultValue={3.5} precision={1} />
          </div>

          <p className="text-secondary">
            By<span className="foodtype ms-2">NestFood</span>
          </p>

          <div className=" d-flex justify-around align-items-center">
            <p className="text-success fw-bold">$54.85</p>
            <p className="line-through">$55.8</p>
            <Button
              className="d-flex   gap-1"
              style={{  border: "none" }}
            >
              <ShoppingCart
                size={20}
                
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
