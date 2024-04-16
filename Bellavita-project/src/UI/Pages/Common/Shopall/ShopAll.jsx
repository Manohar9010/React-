import React, { useEffect, useState } from "react";
// import {toast} from "react-toastify"
import "./ShopAll.css";
import { useDispatch, useSelector } from "react-redux";
import { ListFilter } from "lucide-react";
import axios from "axios";
import { refetch } from "../../../../Redux/Fetures/CartSlice";
import CardCom from "../../../Component/CardCom";
import Filter from "../../../Component/Filter";
let intialvalue = {
  search: "",
  color: [],
  brand: "",
  size: [],
  gender: "",
  price: { lt: 10000, gt: 0 },
  discountPercentage: { lt: 100, gt: 0 },
};

export default function ShopAll() {
  const [filter, setFilter] = useState(intialvalue);
  const [open, setOpen] = useState(false);
  const [allperfumedata, setAllperfume] = useState([]);

  const data = useSelector((state) => state.singupdataslice);
  let dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
      params: filter,
    }).then((res) => {
      console.log("useEffect  res:", res.data.count);
      setAllperfume(res.data.data);
    });
  }, [filter]);

  const addtocardhandler = (id) => {
    console.log("first-id", id, data?.token);

    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${id}`,
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("cardlog", res?.data?.data);
        // toast.success("success")
        dispatch(refetch());
        alert("addddd");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let img1 =
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";
  return (
    <div style={{ padding: "145px 0px 50px 0px", textAlign: "center" }}>
      <h1
        style={{
          fontFamily: "ui-rounded",
          textAlign: "left",
          paddingLeft: "25px",
        }}
      >
        Shop All <hr />
      </h1>
      <div
        className="filterbutton d-flex   gap-5 p-2 cursor-pointer"
        style={{ backgroundColor: "#F6F6F6   " }}
        onClick={() => setOpen(!open)}
      >
        <ListFilter />
        {open ? <h6>CLOSE FILTER </h6> : <h6>SHOW FILTTER</h6>}
      </div>
      <Filter open={open} setFilter={setFilter} filter={filter} intialvalue={intialvalue} />

      <div className="bestselarmain grid grid-cols-4 gap-5  mx-20">
        {allperfumedata?.map?.((e, i) => {
          return <CardCom  addtocardhandler={addtocardhandler} product={e} key={e._id} />;
        })}
      </div>
    </div>
  );
}
