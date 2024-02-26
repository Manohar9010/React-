import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { addtoarry } from "../../redux/Fetures/User";

export default function UserUpdate() {
  const [inputval, setInputval] = useState();
  let dispach = useDispatch();
  const addvalfun = () => {
    dispach(addtoarry(inputval));
    setInputval("");
  };

  const enterfun = (e) => {
    if (e.key === "Enter") {
      addvalfun();
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="w-25 mt-3">
          <Input
            type="text"
            value={inputval}
            onKeyPress={enterfun}
            onChange={(e) => setInputval(e?.target?.value)}
          />
          <div className="d-flex justify-content-center mt-3">
            <Button onClick={() => addvalfun()}>addString</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
