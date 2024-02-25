import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { inputval, oning } from "../../redux/Fetures/Amout";

export default function AmountUpdate() {
  const [valinput, setValinput] = useState(0);
  let dispach = useDispatch();

  const inputfun = () => {
    dispach(inputval(valinput));
    setValinput("");
  };
  const enterfun = (e) => {
    if (e.key === "Enter") {
      inputfun();
    }
  };
  return (
    <div className="">
      <Button className="bg-danger" onClick={() => dispach(oning())}>
        Amount_inc
      </Button>
      <div className="d-flex justify-content-center my-4">
        <div className="w-25">
          <Input
            type="text"
            onKeyPress={enterfun}
            value={valinput}
            onChange={(e) => setValinput(e?.target?.value)}
            className="mb-3"
          />
          <Button onClick={() => inputfun()}>inputadd</Button>
        </div>
      </div>
    </div>
  );
}
