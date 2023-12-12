import React, { useEffect, useRef } from "react";
import { Button } from "reactstrap";

export default function UseRefCom() {
  const colorref = useRef(null);
  const inputref = useRef(null);
  const changecolor = () => {
    console.log("-----------", colorref);
    colorref.current.style.background = "red  ";
    colorref.current.innerText="hello shiva" ;
    colorref.current.style.fontWeight="800" 
    colorref.current.style.fontSize="100px" 
    inputref.current.value="hello"
    inputref.current. style.background="grey"
  };

  useEffect(()=>{
    inputref.current.focus()
  },[])
  return (
    <div className="">
      <div
        style={{
          width: "300px",
          height: "350px",
          border: "2px solid black",
          margin: "100px auto",
          background: "yellow", 
        }}
        ref={colorref}
      >

      </div>
        <input type="text" ref={inputref}style={{ margin: "0px 0px 0px 680px" }}/>
      <Button style={{ margin: "0px 0px 0px 680px" }} onClick={changecolor}>
        Click
      </Button>
    </div>
  );
}
