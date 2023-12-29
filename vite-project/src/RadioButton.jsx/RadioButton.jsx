import React, { useState } from "react";

export default function RadioButton() {
  const [state, setState] = useState();
  const [state1, setState1] = useState();
  const [state2, setState2] = useState();
  const [state3, setState3] = useState();

  const Changevalue = (data) => {};

  return (
    <div>
      <div>
        <h1> RadioButton</h1>
        <input
          type="radio"
          name="gender"
          value={"Male"}
          onChange={(e) => setState(e?.target?.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value={"FeMale"}
          onChange={(e) => setState(e?.target?.value)}
        />
        FeMale
        <h1>{state}</h1>
      </div>

      <div>
        <input
          type="checkbox"
          value={state1}
          onChange={Changevalue("Banana")}
        />
        Banana
        <input type="checkbox" value={state2} onChange={Changevalue("Apple")} />
        Apple
        <input
          type="checkbox"
          value={state3}
          onChange={Changevalue("Orange")}
        />
        Orange
        <h1>{state1}</h1>
        <h1>{state2}</h1>
        <h1>{state3}</h1>
      </div>
    </div>
  );
}
