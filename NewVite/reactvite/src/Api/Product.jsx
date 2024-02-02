import axios from "axios";
import React, { useEffect, useState } from "react";
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

export default function Product() {
  const [allproduct, setAllproduct] = useState([]);
  const [product, setProduct] = useState({
    brand: "",
    title:"",
    description:"",
    price:"",
    discount:"",
    stock:"",
    colour:[],
    category:[],
    size:[],
    thambnail:"",
    gender:"",

  });

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
const colorhandler=(colorval)=>{

    setProduct({...product,colour: colorval.map((e)=>e.value) })
}
const categoryhandler=(cateval)=>{
    setProduct({...product,category: cateval.map((e)=>e.value) })
}


  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log("ourdata", res.data.data);
        setAllproduct(res.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  let genders=["male","female","kids"]

  let sizes=["42","43","44","45"]
  
  const selecthandler=(item)=>{
    let match = product.size.includes(item);

    if (match) {
      let fillterdata = product?.size?.filter((e) => e !== item);
      setProduct({ ...product, size: fillterdata });
    } else {
      setProduct({ ...product, size: [...product?.size, item] });
    }
  }
  return (
    <div>
      {/* modal form */}
      <div>
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Product Form</ModalHeader>
          <ModalBody>
          <Form>
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
              placeholder="enter discount"
              type="text"
              value={product.discount}
              onChange={(e) =>
                setProduct({ ...product, discount: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplestock">Avalilable Stock</Label>
            <Input
              id="examplestock"
              name="stock"
              placeholder="enter stock"
              type="text"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplecolor">Colors</Label>

            <Select
              defaultValue={[options[0], options[2]]}
              isMulti
              options={options}
              onChange={(e)=>colorhandler(e)}

            />
          </FormGroup>
          <FormGroup>
            <Label for="examplecategory">Category</Label>

            <Select
              defaultValue={[categoryoptions[0], categoryoptions[1]]}
              isMulti
              options={categoryoptions}
              onChange={(e)=>categoryhandler(e)}

            />
          </FormGroup>
          <Label for="examplesize">Size</Label>
          <FormGroup className="d-flex gap-3">
            {
              sizes.map((el,i)=>{
                return(
                  <div key={i}>
                    <Input id="examplesize" name="size" type="checkbox" onChange={()=>selecthandler(el)} /> {el}

                  </div>
                )
              })
            }
            
           
          </FormGroup>

          <FormGroup>
            <Label>Thumbnail</Label>
            <Input type="text" 
               onChange={(e)=>setProduct({...product,thambnail:e?.target?.value})}
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Gender</legend>
            <FormGroup className="d-flex gap-3">
           {
            genders.map((e,i)=>{
                return(
                        
              <FormGroup check>
              <Input name="radio1" type="radio"   onChange={()=>setProduct({...product,gender: e})} /> <Label check>{e}</Label>
            </FormGroup>
                )
            })
           }
        
            </FormGroup>
          </FormGroup>
         
          <Button>Submit</Button>
        </Form>

          </ModalBody>
        </Modal>
        <p> {product.brand}</p>
      <p> {product.title}</p>
      <p> {product.description}</p>
      <p> {product.price}</p>
      <p> {product.discount}</p>
      <p> {product.stock}</p>
      <p> {product.colour}</p>
      <p> {product.category}</p>
      <p> {product.gender}</p>
      <p> {product.thambnail}</p>
      <p> {product.size}</p>

      </div>

      {/* <Table striped>
        <thead>
          <tr>
            <th>SR.NO</th>
            <th>iMAGE</th>
            <th>TITLE</th>
            <th>OFFER PRICE</th>
            
            <th>PRICE</th>
            <th>COLOUR</th>
            <th>SIZE</th>
          </tr>
        </thead>
        <tbody>
          {allproduct.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    style={{ height: "60px", width: "80px" }}
                    src={e?.thumbnail}
                    alt=""
                  />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>{e?.price}</td>
                <td className="">
                    <div className="d-flex gap-2">
                    {e?.color.map((color)=>{
                    return <div style={{height:"20px" ,width:"20px",backgroundColor:color,borderRadius:"50%",border:"1px solid black"}}></div>
                }) }
                    </div>
                    </td>

                <td>
                     <div className="d-flex gap-3">
                        
                     
                    {e?.size.map((size)=>{
                    return <div style={{border:"1px solid black", borderRadius:"50%",height:"30px",width:"30px",textAlign:"center"}}> {size}

                    </div>
                }) } </div></td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}

      {/* card */}
      <div>
        <div>
          <div style={gridContainerStyle}>
            {allproduct.map((e, i) => {
              return (
                <div key={i} style={{ margin: "0px 50px" }}>
                  <div>
                    <img
                      style={{ height: "250px", width: "300px" }}
                      src={e?.thumbnail}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>{e?.title}</h5>
                    <h6>
                      Original Price:{" "}
                      <span style={{ color: "red" }}>{e?.price}</span>{" "}
                    </h6>
                    <h6>
                      Offer Price:{" "}
                      <span style={{ color: "green" }}>
                        {e.discountPercentage || 0}%{" "}
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
                        return (
                          <div
                            key={i}
                            style={{
                              border: "1px solid black",
                              borderRadius: "50%",
                              height: "30px",
                              width: "30px",
                              textAlign: "center",
                            }}
                          >
                            {" "}
                            {size}
                          </div>
                        );
                      })}{" "}
                    </div>
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
