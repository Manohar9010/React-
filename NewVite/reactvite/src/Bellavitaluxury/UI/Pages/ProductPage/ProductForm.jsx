import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { categoryoptions, options } from "../../../../Utils/Constants";
import Select from "react-select";
export default function ProductForm({
  product,
  setProduct,
  setUpdate,
  update,
  modal,
  setModal,
  toggle,
  submitHanler,
  updatehandler,
}) {
  let genders = ["male", "female", "kids"];

  let sizes = ["42", "43", "44", "45"];

  let imgsf = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSjRn7_h6lgzDtU7jVaoI_zuqRhAF63cRTQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJylV1wmAls8KYBkbFNWHdgTralxS7HqLq7cpfx3DaLVyic7hWuBBIDuhS5gZO7ORxJk&usqp=CAU",
    "https://banner2.cleanpng.com/20191009/wif/transparent-bicycle-rider-icon-outdoor-activities-icon-bike-ic-5d9d9359d32da8.233521721570607961865.jpg",
    "https://banner2.cleanpng.com/20180407/dww/kisspng-airplane-silhouette-clip-art-vektor-5ac90c378a9650.3600862315231253035677.jpg",
    "https://www.freeiconspng.com/uploads/helicopter-icon-14.png",
  ];
  const CustomColorOption = ({ innerProps, label, data }) => {
    return (
      <div
        {...innerProps}
        style={{
          padding: "0px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #dee2e6",
          background: "#dee9",
          cursor: "pointer",
        }}
      >
        {label}

        <div
          style={{
            backgroundColor: data.value,
            width: "20px",
            height: "20px",
            marginRight: "8px",
            borderRadius: "50%",
          }}
        >
          {data.value === "car" && (
            <img style={{ width: "20px" }} src={imgsf[0]} alt="" />
          )}
          {data.value === "bike" && (
            <img style={{ width: "20px" }} src={imgsf[1]} alt="" />
          )}
          {data.value === "helicopter" && (
            <img style={{ width: "20px" }} src={imgsf[4]} alt="" />
          )}
          {data.value === "cycle" && (
            <img style={{ width: "20px" }} src={imgsf[2]} alt="" />
          )}
        </div>
      </div>
    );
  };


  const selecthandler = (item) => {
    let match = product.size.includes(item);

    if (match) {
      let fillterdata = product?.size?.filter((e) => e !== item);
      setProduct({ ...product, size: fillterdata });
    } else {
      setProduct({ ...product, size: [...product?.size, item] });
      setChecck({ ...product, size: [...product?.size, item] });
    }
  };

  return (
    <div>
      <div style={{ padding: "200px 0px 0px 0px" }}>
        <Button color="danger" onClick={toggle}>
          Product Crud
        </Button>
        <Modal backdrop="static" isOpen={modal} toggle={toggle}>
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
                  components={{
                    Option: ({ innerProps, label, data }) => (
                      <CustomColorOption
                        innerProps={innerProps}
                        label={label}
                        data={data}
                        imgsf={imgsf}
                      />
                    ),
                  }}
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
                        checked={product?.size?.includes?.(el)}
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
                  value={product.thumbnail}
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
                      <FormGroup key={i} check>
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
              {update ? (
                <Button onClick={updatehandler}>Update</Button>
              ) : (
                <Button>Submit</Button>
              )}
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
