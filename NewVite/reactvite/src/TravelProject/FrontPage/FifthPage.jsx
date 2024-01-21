import React from "react";
import { Button } from "reactstrap";
import img2 from "../Images/forthpageimage2.jpg";
export default function FifthPage() {
  return (
    <div>
      <div className="d-flex gap-5" style={{ margin: "40px 80px 70px 80px" }}>
        <div className="">
          <img
            style={{ width: "600px", borderRadius: "15px" }}
            src={img2}
            alt=""
          />
        </div>
        <div className="">
          <h6 style={{ fontWeight: "700", color: "grey" }}>EXPLORE</h6>
          <h1 style={{ margin: "50px 0px 40px 0px" }}>
            Exclusive Vacation Packages And Travel Services For You.
          </h1>

          <p>
            Moll itia placeat modi expl icabo volup tatum corporis unde Dicta,
            provident Rem adipisci Moll itia placeat modi volup tatem tenetur
            conse quatur.Conseq tenetur conse quatur adipi sicing elit.
          </p>
          <Button
            style={{
              margin: "20px 0px 0px 0px",
              backgroundColor: "#20b7d5",
              padding: "12px 30px ",
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
