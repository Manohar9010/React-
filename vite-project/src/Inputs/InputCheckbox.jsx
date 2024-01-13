import React, { useState } from "react";
import { Input } from "reactstrap";

export default function InputCheckbox() {
  let letters = ["A", "B", "C", "D", "E", "F", "G"];

  const [stateindex, setStateindex] = useState([]);
  const SelectHandler = (index) => {
    let prasentdata = stateindex.includes(index);

    if (prasentdata) {
      let fillterdata = stateindex.filter((e) => e !== index);
      setStateindex(fillterdata);
    } else {
      setStateindex([...stateindex, index]);
    }
  };
  return (
    <div className="mx-auto d-flex gap-5" style={{ width: "200px" }}>
      <div>
        {letters.map((e, i) => {
          return (
            <div className="w-100 ms-5 mt-5 d-flex gap-3 align-items-center">
              <Input
                checked={stateindex.includes(i)}
                onChange={() => SelectHandler(i)}
                style={{ width: "40px", height: "40px" }}
                type="checkbox"
              />{" "}
              <h3>{e}</h3>
            </div>
          );
        })}
      </div>
      <div>
        {letters.map((e, i) => {
          if (stateindex.includes(i)) {
            return <h5>{e}</h5>;
          }
        })}
      </div>
    </div>
  );
}
