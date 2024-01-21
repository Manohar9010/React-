import React from "react";
import "./FirstPage.css";
import { Button } from "reactstrap";
export default function FirstPage() {
  return (
    <div>
      <div className="firstmain text-center">
        <div>
          <div style={{padding:"170px 0px 0px 0px "}}>

          <h1>WELCOME</h1>
          <h1>TO LET'S TRAVEL</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero <br /> molestias incidunt saepe temporibus et voluptatibus
            numquam laudantium sunt dignissimos,{" "}
          </p>
        </div>
        <div>
          <Button>Book Your Travel</Button>
        </div>
      </div>
    </div>
  );
}
