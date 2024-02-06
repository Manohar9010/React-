import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";

let intialProduct = {
  brand: "",
  title: "",
  description: "",
  price: "",
  discountPercentage: "",
  availableStock: "",
  color: ["Black"],
  category: ["Casual"],
  size: [],
  thumbnail: "",
  gender: "",
};

export default function Product() {
  const [product, setProduct] = useState(intialProduct);
  const [getproduct, setGetproduct] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log(res.data.data);
        setGetproduct(res?.data?.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  let submitHanler = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        console.log(res.data.data);
        alert("adddata");
        //  setGetproduct(res?.data?.data)
      })
      .catch((error) => {
        alert(error);
      });
  };

  const options = [
    { value: "black", label: "black" },
    { value: "white", label: "white" },
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "green", label: "green" },
  ];
  const categoryoptions = [
    { value: "casual", label: "casual" },
    { value: "highlength", label: "highlength" },
    { value: "shortlength", label: "shortlength" },
    { value: "shorts", label: "shorts" },
    { value: "nightdress", label: "nightdress" },
  ];

  const selecthandler = (item) => {
    let match = product.size.includes(item);

    if (match) {
      let fillterdata = product?.size?.filter((e) => e !== item);
      setProduct({ ...product, size: fillterdata });
    } else {
      setProduct({ ...product, size: [...product?.size, item] });
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let genders = ["male", "female", "kids"];

  let sizes = ["42", "43", "44", "45"];

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
  };
  let img1 =
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";

  return (
    <div>
      <div>
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Product Form</ModalHeader>
          <ModalBody>
            <Form onSubmit={submitHanler}>
              <FormGroup>
                <Label for="examplebrand">Brand</Label>
                <Input
                  id="examplebrand"
                  name="brand"
                  placeholder="brand name"
                  type="text"
                  value={product.brand}
                  onChange={(e) =>
                    setProduct({ ...product, brand: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampletitle">Title</Label>
                <Input
                  id="exampletitle"
                  name="title"
                  placeholder="enter title"
                  type="text"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampledescription">Description</Label>
                <Input
                  id="exampledescription"
                  name="description"
                  placeholder="enter description"
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleprice">Price</Label>
                <Input
                  id="exampleprice"
                  name="price"
                  placeholder="enter price"
                  type="text"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplepercentage">Discount Percentage</Label>
                <Input
                  id="examplediscount"
                  name="discout"
                  placeholder="enter discountPercentage"
                  type="text"
                  value={product.discountPercentage}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      discountPercentage: e?.target?.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplestock">Avalilable Stock</Label>
                <Input
                  id="examplestock"
                  name="availableStock"
                  placeholder="enter availableStock"
                  type="text"
                  value={product.availableStock}
                  onChange={(e) =>
                    setProduct({ ...product, availableStock: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplecolor">Colors</Label>

                <Select
                  defaultValue={[options[0]]}
                  isMulti
                  options={options}
                  value={product.color?.map((ell) => {
                    return { value: ell, label: ell };
                  })}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      color: e.map(
                        (lel) =>
                          lel.value.charAt(0).toUpperCase() + lel.value.slice(1)
                      ),
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplecategory">Category</Label>

                <Select
                  defaultValue={[categoryoptions[0]]}
                  isMulti
                  options={categoryoptions}
                  value={product.category?.map((ell) => {
                    return { value: ell, label: ell };
                  })}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      category: e.map(
                        (ele) =>
                          ele.value.charAt(0).toUpperCase() + ele.value.slice(1)
                      ),
                    })
                  }
                />
              </FormGroup>
              <Label for="examplesize">Size</Label>
              <FormGroup className="d-flex gap-3">
                {sizes.map((el, i) => {
                  return (
                    <div key={i}>
                      <Input
                        id="examplesize"
                        name="size"
                        type="checkbox"
                        onChange={() => selecthandler(el)}
                      />{" "}
                      {el}
                    </div>
                  );
                })}
              </FormGroup>

              <FormGroup>
                <Label>Thumbnail</Label>
                <Input
                  type="text"
                  onChange={(e) =>
                    setProduct({ ...product, thumbnail: e?.target?.value })
                  }
                />
              </FormGroup>

              <FormGroup tag="fieldset">
                <legend>Gender</legend>
                <FormGroup className="d-flex gap-3">
                  {genders.map((e, i) => {
                    return (
                      <FormGroup check>
                        <Input
                          type="radio"
                          checked={product.gender === e}
                          onChange={() => setProduct({ ...product, gender: e })}
                        />{" "}
                        <Label check>{e}</Label>
                      </FormGroup>
                    );
                  })}
                </FormGroup>
              </FormGroup>

              <Button>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
        <p> {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</p>
        <p> {product.title}</p>
        <p> {product.description}</p>
        <p> {product.price}</p>
        <p> {product.discountPercentage}</p>
        <p> {product.availableStock}</p>
        <p> {product.color}</p>
        <p> {product.category}</p>
        <p> {product.gender}</p>
        <p> {product.thumbnail}</p>
        <p> {product.size}</p>
      </div>

      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Images</th>
              <th>Brand</th>
              <th>Title</th>
              <th>Offer Price</th>
              <th>Colors</th>
              <th>size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getproduct.map((e, i) => {
              return (
                <tr>
                  <th scope="row">1</th>
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
                    <div className="d-flex gap-2">
                      {e?.color.map((color, i) => {
                        return (
                          <div
                            key={i}
                            style={{
                              height: "20px",
                              width: "20px",
                              backgroundColor: color,
                              borderRadius: "50%",
                              border: "1px solid black",
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex gap-3">
                      <span style={{ fontSize: "20px" }}>Size :</span>
                      {e?.size.map((size, i) => {
                        let backgroundColor;

                        if (size === "42") {
                          backgroundColor = "yellow";
                        } else {
                          backgroundColor = "white";
                        }
                        return (
                          <div
                            key={i}
                            style={{
                              border: "1px solid black",
                              borderRadius: "50%",
                              height: "30px",
                              width: "30px",
                              textAlign: "center",
                              backgroundColor: backgroundColor,
                            }}
                          >
                            {" "}
                            {size}
                          </div>
                        );
                      })}{" "}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex gap-xl-5">
                      <Button
                        className="bg-danger"
                        onClick={() => console.log("===>id", e._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        className="bg-warning"
                        onClick={() => console.log("elemet", e)}
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* <div>
        <div style={gridContainerStyle}>
          {getproduct.map((e, i) => {
            return (
              <div key={i} style={{ margin: "0px 50px" }}>
                <div>
                  <img
                    style={{ height: "250px", width: "300px" }}
                    src={e?.thumbnail || img1}
                    alt="image not available"
                  />
                </div>
                <div>
                  <h4>{e.brand}</h4>
                  <h5>{e?.title || "our product"}</h5>
                  <p style={{ fontWeight: "bold" }}>{e.description}</p>
                  <h6>
                    Original Price:{" "}
                    <span style={{ color: "red" }}>{e?.price}</span>{" "}
                  </h6>
                  <h6>
                    Offer Price:{" "}
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
                  </h6>
                  <div className="d-flex gap-2">
                    <span style={{ fontSize: "20px" }}>colors :</span>
                    {e?.color.map((color, i) => {
                      return (
                        <div
                          key={i}
                          style={{
                            height: "20px",
                            width: "20px",
                            backgroundColor: color,
                            borderRadius: "50%",
                            border: "1px solid black",
                          }}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="d-flex gap-3">
                    <span style={{ fontSize: "20px" }}>Size :</span>
                    {e?.size.map((size, i) => {
                      let backgroundColor;

                      if (size === "42") {
                        backgroundColor = "yellow";
                      } else {
                        backgroundColor = "white";
                      }
                      return (
                        <div
                          key={i}
                          style={{
                            border: "1px solid black",
                            borderRadius: "50%",
                            height: "30px",
                            width: "30px",
                            textAlign: "center",
                            backgroundColor: backgroundColor,
                          }}
                        >
                          {" "}
                          {size}
                        </div>
                      );
                    })}{" "}
                  </div>
                  <p style={{ fontWeight: "500" }}>
                    AvalableStock:{e.availableStock}
                  </p>

                  <div className="d-flex gap-xl-5">
                    <Button
                      className="bg-danger"
                      onClick={() => console.log("===>id", e._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      className="bg-warning"
                      onClick={() => console.log("elemet", e)}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
