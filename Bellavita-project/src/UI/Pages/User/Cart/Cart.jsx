import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";

import {
  addCart,
  fetchCart,
  refetch,
  setCart,
} from "../../../../Redux/Fetures/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import axios from "axios";
export default function Cart() {
  const dispatch = useDispatch();
  const { error, cart, pending, cartid } = useSelector(
    (store) => store.cartSlice
  );
  console.log("WishList  cartid:", cartid);
  const data = useSelector((state) => state.singupdataslice);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const dcrementeHnadler = (productId, count, id) => {
    let isRemove = false;
    if (id || count === 1) {
      isRemove = true;
    }

    axios({
      method: "put",
      url: `http://localhost:9999/cart/update`,
      data: {
        _id: cartid,
        productId,
        isRemove,
      },
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })?.then((res) => {
      dispatch(addCart(res.data));
    });
  };

  const deleteAllHandler = () => {
    axios({
      method: "delete",
      url: `http://localhost:9999/cart/delete/${cartid}`,
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })
      ?.then((res) => {
        console.log("delete", res);
        dispatch(setCart());
      })
      ?.catch((err) => {
        console.log("error", err);
      });
  };

  const addtocardhandlers = (id) => {
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
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{

    console.log("checkdata",cart)
  },[])
  return (
    <div>
      <div className="" style={{ marginTop: "0px" }}>
        {/* <div>  <Button onClick={()=>deleteAllHandler()}>deleteAll</Button> </div> */}
        <div className="d-flex justify-between mx-3">
          <h3 className="font-serif">MY CART LIST</h3>
          <Button onClick={() => deleteAllHandler(cartid)}>RemoveAll</Button>
        </div>
        <div>
          <div>
            {cart?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex  border-2 border-gray-400 rounded p-2  items-center my-2"
                >
                  <div className="flex-1 flex justify-center">
                    <img
                      src={e?.productId?.thumbnail}
                      alt=""
                      className="w-36 rounded"
                    />
                  </div>
                  <div className="flex-1 grig items-center">
                    <p>
                      {" "}
                      <span>TITTLE :</span> {e?.productId?.title}
                    </p>
                    <p>
                      {" "}
                      <span>PRICE :</span> {e?.productId?.price}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex ">
                      <Button
                        onClick={() =>
                          dcrementeHnadler(e?.productId?._id, e?.count)
                        }
                        className="bg-transparent text-black fw-bolder  "
                      >
                        -
                      </Button>
                      <div className="grid content-center border border-black mx-2 px-3 rounded">
                        {e.count}
                      </div>
                      <p className="text-center"></p>
                      <Button onClick={()=> addtocardhandlers (e?.productId?._id,)} className="bg-transparent text-black fw-bolder  ">
                        +
                      </Button>

                      <Button
                        onClick={() =>
                          dcrementeHnadler(e?.productId?._id, e?.count, e?._id)
                        }
                        className="bg-dark ms-14"
                      >
                        Remove
                      </Button>
                    </div>

                    {/* <p> <span>COUNT : </span> {e.count}  </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
