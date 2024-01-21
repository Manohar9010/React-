import { ChevronRight, Clock, Users } from "lucide-react";
import React from "react";
import './Fourthpage.css'
export default function FourthPagecard({imgd,title,rate}) {
  return (
    <div>
      <div className="" style={{backgroundColor:"#ededed" ,paddingTop:"10px",borderRadius:"15px"} }>
        <div style={{margin:"20px 30px 20px 30px"}}>
          <img style={{height:"250px",width:"340px", borderRadius:"15px" }} src={imgd} alt="" />
        </div>
        <div className="mx-4 text-secondary">
          <h5 className="title">{title}</h5>
          <div className="d-flex justify-content-between">
            <div>
              <p><Clock /> 7Days</p>
            </div>
            <div>
              <p><Users /> Max People : 5</p>
            </div>
          </div>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque labor.</p>
        </div>
        <hr className="mx-4" />
        <div className="d-flex justify-content-between mx-4">
          <div className=" mb-4 " style={{color:"#20b7d5",fontWeight:"800"}}>
           

            <h4>From $ {rate}</h4>
          
          </div>
          <div> <ChevronRight /></div>
        </div>
      </div>
    </div>
  );
}
