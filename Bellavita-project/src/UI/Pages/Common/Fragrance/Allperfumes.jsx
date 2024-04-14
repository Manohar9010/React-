import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import {
  FormGroup,
  Input,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";

import { useLocation, useNavigate } from "react-router-dom";
import Showpreview from "../../../Component/Showpreview";

const intialvalue = {
  gender: "",
  // rating: 0,
  search: "",
  color: [],
  brand: "",
  size: [],
  price: { lt: 1000000, gt: 50 },
  discountPercentage: { lt: 1000000, gt: 0 },
};

const img1 =
  "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";
const quantity = ["100ml", "250ml", "350ml"];
const gender = ["male", "female"];

export default function Allperfumes() {
  const [isopen, setIsopen] = useState(false);
  const [showprviews, setShowprevie] = useState([]);
  const [rangecheck, setRangecheck] = useState(1000);

  const [filtersate, setFiltersate] = useState({
    range: 0,
    quantitys: [],
    gender: [],
  });
  const refetchData = () => setRefetch(!refetch);
  const [allperfumedata, setAllperfume] = useState([]);
  let [filter, setFilter] = useState(intialvalue);

  const toogleoffcanvas = () => {
    setIsopen(!isopen);
  };

  const data = useLocation();

  let navigate = useNavigate();

  useEffect(() => {
    let mainFilter = data.state || {};
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
      params: { ...filter, ...mainFilter },
    })
      .then((res) => {
        console.log("useEffect  res:", res.data);
        setAllperfume(res.data.data);
      })
      .catch((err) => {
        console.log("useEffect  err:", err);
      });
  }, [filter,data.state]);

  const valumcheckhandlar = (item) => {
    let match = filter.size.includes(item);
    if (match) {
      let fillerdata = filter?.size?.filter((e) => e !== item);
      setFilter({ ...filter, size: fillerdata });
    } else {
      setFilter({ ...filter, size: [...filter?.size, item] });
    }
  };

  const removeallfilterhandler = () => {
    setFiltersate({
      range: 0,
      quantitys: [],
      gender: [],
    });
  };

  const handlePriceChange = (e) => {
    const newValue = parseInt(e.target.value * 10);
    setRangecheck(newValue); // Update rangecheck state
    setFilter({
      ...filter,
      price: { ...filter.price, lt: newValue }, // Update the lt property of price
    });
  };

  const showpreview = (id) => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${id}`,
    })
      .then((res) => {
        setShowprevie(res?.data?.data);
        console.log("ooooooo", showprviews);
        if (showprviews.length !== 0) navigate("/showpreview");
      })
      .catch((error) => {
        console.log("error=>", error);
      });
  };

  useEffect(() => {
    if (showprviews.length > 0) navigate("/showpreview");
  }, [showprviews, navigate]);

  return (
    <div>
      <div className=" mb-20">
        <div className="mt-56">
          <div className="ms-10 font-serif">
            <h1>All Perfumes</h1>
            <hr />
          </div>

          <div
            className="border h-8 w-40 ms-5 text-center cursor-pointer"
            onClick={toogleoffcanvas}
          >
            filter
          </div>

          <Offcanvas isOpen={isopen} toggle={toogleoffcanvas}>
            <OffcanvasHeader toggle={toogleoffcanvas}>
              Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody>
              <strong>
                <div>
                  <h6>Rate Between</h6>

                  <Input type="range" onChange={(e) => handlePriceChange(e)} />

                  <h6>Price Greater Than: {filter.price.lt}</h6>
                </div>
                <div>
                  <h6>Size</h6>
                  <div className="d-flex gap-3">
                    {quantity.map((e, i) => {
                      return (
                        <FormGroup className="d-flex gap-2" key={i}>
                          <Input
                            type="checkbox"
                            checked={filter.size.includes(e)}
                            onChange={() => valumcheckhandlar(e)}
                          />
                          <label htmlFor="">{e}</label>
                        </FormGroup>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h6>Gender</h6>

                  {gender.map((e, i) => {
                    return (
                      <FormGroup key={i}>
                        <Input
                          type="radio"
                          name="gender"
                          checked={filter.gender.includes(e)}
                          onChange={() => setFilter({ ...filter, gender: e })}
                        />
                        <label htmlFor="">&nbsp; {e}</label>
                      </FormGroup>
                    );
                  })}
                </div>
                <div>
                  <Button className="bg-dark" onClick={removeallfilterhandler}>
                    Remove All Fillters
                  </Button>
                </div>
              </strong>
            </OffcanvasBody>
          </Offcanvas>
          <div className="bestselarmain grid grid-cols-4 gap-5  mx-20">
            {allperfumedata?.map?.((e, i) => {
              return (
                <div key={i} className="mt-3 ">
                  <div
                    onClick={() => showpreview(e._id)}
                    className="d-flex justify-center cursor-pointer "
                  >
                    <img src={e.thumbnail || img1} alt="" className="rounded" />
                  </div>
                  <div className="text-center">
                    <h6> Title: {e.title}</h6>

                    <p>
                      {" "}
                      <span className="font-medium">Type:</span> {e.description}
                    </p>
                    <h6>
                      {" "}
                      Price:
                      <span className="text-green-600">
                        {"-" + e.discountPercentage + "%"}
                      </span>{" "}
                      <span className="text-red-500">
                        {(-(
                          (e.price * e.discountPercentage) / 100 -
                          e.price
                        )).toFixed(2)}{" "}
                      </span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        {e.price}
                      </span>{" "}
                    </h6>

                    <span>{e.colour}</span>

                    <Button className="bg-dark w-75">ADD CART</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Showpreview showprview={showprviews} />
      </div>
    </div>
  );
}
