import React from "react";
import { useSelector } from "react-redux";
export default function CountDisplay() {
  let data = useSelector((store) => {
    console.log("===>", store.COUNT.count);
    return store.COUNT;
  });
  return (
    <div className="d-flex justify-content-center gap-5">
      <h1>Count: {data.count}</h1>
      <h1>Amount:{data.amount}</h1>
      <h1>Pointer:{data.point}</h1>
    </div>
  );
}
