import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { signupSchema } from "../schemas/Foryup";
const inputval = {
  email: "",
  password: "",
  conformpassword: "",
  city: "",
  state: "",
  hobbys:[],
};
export default function Fromikfrom() {
  const [forminputs, setForminputs] = useState([]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: inputval,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        setForminputs([...forminputs, values]);

        action.resetForm();
      },
    });
let hoby=["reading","writing","singing"]

const handleCheckboxChange = (e) => {
  const hobby = e.target.value;
  const isChecked = e.target.checked;
  if (isChecked) {
    // If checkbox is checked, add hobby to values.hobbys
    setFieldValue("hobbys", [...values.hobbys, hobby]);
  } else {
    // If checkbox is unchecked, remove hobby from values.hobbys
    setFieldValue(
      "hobbys",
      values.hobbys.filter((h) => h !== hobby)
    );
  }
};
  return (
    <div>
      <div>
        <div className="mx-2 mt-11">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email Placeholder"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                {errors.email && touched.email ? (
                  <p className="form-error text-red-500">{errors.email}</p>
                ) : null}
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password Placeholder"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                {errors.password && touched.password ? (
                  <p className="form-error text-red-500">{errors.password}</p>
                ) : null}
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="ConformPassword">Conform_Password</Label>
                  <Input
                    id="ConformPassword"
                    name="conformpassword"
                    placeholder="Conform Password Placeholder"
                    type="password"
                    value={values.conformpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                {errors.conformpassword && touched.conformpassword ? (
                  <p className="text-red-600"> {errors.conformpassword}</p>
                ) : null}
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input
                    id="exampleCity"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input
                    id="exampleState"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <Label for="exampleState">State</Label> 
                <FormGroup>
                  
                  {
                    hoby.map((e,i)=>{
                      return(
                        <>
                        <Label> {e}</Label>
                        <Input
                        id="exampleState"
                        type="checkbox"
                        name="hobbys"
                        value={e}
                        onChange={handleCheckboxChange}
                        onBlur={handleBlur}
                        checked={values.hobbys.includes(e)}
                      />
                      </>
                      )
                    })
                  }
                  
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit">Sign in</Button>
          </Form>
        </div>
   <p>{values.hobbys}</p>
        <div>
          {forminputs.map((e, i) => {
            return (
              <div key={i}>
                <p>{e.email}</p>
                <p>{e.password}</p>
                <p>{e.conformpassword}</p>
                <p>{e.city}</p>
                <p>{e.state}</p>
              </div>
            );
          })}
          <h1 className="text-red-400 text-center text-7xl">hello</h1>
        </div>
      </div>
    </div>
  );
}
