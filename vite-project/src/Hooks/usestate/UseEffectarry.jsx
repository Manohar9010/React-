import React, { useEffect, useState } from "react";

export default function UseEffectarry() {
  const [index, setindex] = useState(0);
  const [secindex, setsecindex] = useState(0);
  const namearry = [
    "madhav",
    "vishvak",
    "raju",
    "shiva",
    "raghunandan",
    "chandrashekar",
    "raghav",
  ];
  const scond = ["vishvak", "raghunandan", "raghav"];

  function namefirst() {
    setindex(index + 1);
    if (index > namearry.length - 2) {
      setindex(0);
    }
  }
  function namesecnd() {
    setsecindex(secindex + 1);
    if (secindex > scond.length - 2) {
      setsecindex(0);
    }
  }
  useEffect(() => {
    const nnn = namearry[index];
    if (scond[secindex].includes(nnn)) {
      alert("hhhhhh");
    }
  }, [index, secindex]);
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1>{namearry[index]}</h1>

      <button style={{ padding: "15px" }} onClick={namefirst}>
        Click
      </button>
      <hr />
      <h1>{scond[secindex]}</h1>

      <button style={{ padding: "15px" }} onClick={namesecnd}>
        Click
      </button>
    </div>
  );
}
