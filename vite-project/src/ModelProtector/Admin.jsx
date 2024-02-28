import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Admin() {
  let Radioarry = [
    {
      gender: "Male",
    },
    {
      gender: "Femal",
    },
    {
      gender: "Kids",
    },
  ];
  return (
    <div>
      <Form>
        <FormGroup tag="fieldset">
          {Radioarry.map((e, i) => {
            return (
              <FormGroup check>
                <Input
                  onClick={() => ChackChange("Reading")}
                  id="checkbox2"
                  type="checkbox"
                />{" "}
                <Label check>Reading</Label>
              </FormGroup>
            );
          })}
          {/* <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Male
      </Label>
    </FormGroup> */}
        </FormGroup>
      </Form>
    </div>
  );
}
