import React from "react";
import { useSelector } from "react-redux";

export default function UserDispaly() {
  let userdata = useSelector((store) => {
    return store.userSlice.user;
  });
  console.log("===>", userdata);

  return (
    <div>
      <div className="d-flex justufy-content-center">
        <div className="w-25"></div>
        {userdata.map((e) => {
          return <span className="fs-3 ">{"" + e + ", "}</span>;
        })}
      </div>
    </div>
  );
}
