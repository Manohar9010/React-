import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export default function ModelPage({ modal, toggle }) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
           
           
            <FormGroup tag="fieldset">
              <legend>Gender</legend>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>
                 Female
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input  name="radio1" type="radio" />{" "}
                <Label check>Kids</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
            <legend>Hobbys</legend>
              <Input type="checkbox" /> <Label check>Reading</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" /> <Label check>Singing</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" /> <Label check>Dancing</Label>
            </FormGroup>
            <FormGroup>
            <Select options={options} />
            </FormGroup>
            
            <Button>Submit</Button>
          </Form>
        </ModalBody>
       
      </Modal>
    </div>
  );
}
