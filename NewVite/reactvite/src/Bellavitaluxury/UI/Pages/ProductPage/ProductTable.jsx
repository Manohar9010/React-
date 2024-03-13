import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import { PencilRuler, Trash } from "lucide-react";
import Example from "./ModelCheck";
import PreviewData from "./PreviewData";
import axios from "axios";
import { useDispatch } from "react-redux";
import { prevew } from "../../../Redux/Fetures/PreviewSlice";
export default function ProductTable({
  getproduct,
  setGetproduct,
  product,
  setProduct,
  setUpdate,
  update,
  deletehandler,
  toggle,
}) {
  const Edithandler = (data) => {
    toggle();
    setProduct(data);
    setUpdate(true);
  };
 
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  // const showpreview = (id) => {
  //   axios({
  //     method: "get",
  //     url: `http://localhost:9999/product/getProductById/${id}`,
  //   })
  //     .then((res) => {
  //       console.log(res.data.data);

  //       // dispach(prevew(res.data.data));
  //       setModaldata(res.data.data)
  //       // navigate("/preview");
      
  //       toggle1()
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Images</th>
              <th>Brand</th>
              <th>Title</th>
              <th>Offer Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getproduct.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={e?.thumbnail || img1}
                      alt="image not available"
                    />
                  </td>
                  <td>{e.brand}</td>
                  <td>{e?.title || "our product"}</td>
                  <td>
                    <span style={{ color: "green" }}>
                      -{e.discountPercentage || 0}%{" "}
                    </span>{" "}
                    <span style={{ color: "red" }}>
                      {" "}
                      {(
                        e.price -
                        (e.price * e.discountPercentage || 0) / 100
                      ).toFixed(2)}
                    </span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {" "}
                      {e.price}
                    </span>{" "}
                  </td>

                  <td>
                    <div className="d-flex gap-xl-5">
                      <Trash
                        color="red"
                        role="button"
                        onClick={() => deletehandler(e._id)}
                      />
                      <PencilRuler
                        color="#3c93b0"
                        role="button"
                        onClick={() => Edithandler(e)}
                      />
                    </div>
                  </td>
                  <td>
                    <Button
                      // style={{ backgroundColor: "black" }}
                      // onClick={() => showpreview(e._id)}

                    >
                      
                      Preview
                    </Button>

                    {/* <PreviewData
                      modadaldata={modadaldata}
                      item={e._id}
                      showpreview={() => showpreview(e._id)}
                    /> */}
                    <PreviewData toggle1={toggle1} setModal1={setModal1} modal1={modal1}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
