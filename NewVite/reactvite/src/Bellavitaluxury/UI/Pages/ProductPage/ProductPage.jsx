import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { prevew } from "../../../Redux/Fetures/PreviewSlice";
import ProductForm from "./ProductForm";
import { intialProduct } from "../../../../Utils/IntialState";
import ProductTable from "./ProductTable";

export default function ProductPage() {
  const [getproduct, setGetproduct] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const refetchData = () => setRefetch(!refetch);
  const [checck, setChecck] = useState([]);
  const [product, setProduct] = useState(intialProduct);
  const [update, setUpdate] = useState(false);
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
    
   
  
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setGetproduct(res?.data?.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [refetch]);

  

  const toggle = () => {
    setModal(!modal);
    setUpdate(false);
    setProduct(intialProduct);
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
  };

  const deletehandler = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        alert("Delete data....!");
        //  setGetproduct(res?.data?.data)
        refetchData();
        // console.log(id);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const updatehandler = () => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${product._id}`,
      data: product,
    })
      .then((res) => {
        alert("Update data....!");

        toggle();
        refetchData();
      })
      .catch((error) => {
        alert(error);
      });
  };

  let submitHanler = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        alert("adddata");
        refetchData();
        //  setGetproduct(res?.data?.data)
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <ProductForm
        product={product}
        setProduct={setProduct}
        setUpdate={setUpdate}
        update={update}
        modal={modal}
        setModal={setModal}
        updatehandler={updatehandler}
        toggle={toggle}
        submitHanler={submitHanler}
      />

      <ProductTable
        getproduct={getproduct}
        setGetproduct={setGetproduct}
        product={product}
        setProduct={setProduct}
        setUpdate={setUpdate}
        update={update}
        deletehandler={deletehandler}
        toggle={toggle}
      />
    </div>
  );
}


