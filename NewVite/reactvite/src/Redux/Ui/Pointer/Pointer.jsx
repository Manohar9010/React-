import React from "react";
import PointerDispaly from "./PointerDispaly";
import PointerUpdate from "./PointerUpdate";

export default function Pointer() {
  return (
    <div className="text-center mt-5">
      <hr />
      <PointerDispaly />
      <PointerUpdate />
    </div>
  );
}
