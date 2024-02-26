import React from "react";
import { useSelector } from "react-redux";

export default function PointerDispaly() {
  let data = useSelector((store) => {
    console.log("ponterstote", store);
    return store.pointerReduser.pointer;
  });
  return (
    <div>
      <h1>Pointer:{data}</h1>
    </div>
  );
}
