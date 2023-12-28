import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
} from "reactstrap";

export default function ModelSearch({modal,toggle}) {
     
  const [getsearchparam]=useSearchParams()
  console.log(getsearchparam.get("name"))
  return (
    <div>
  
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>User Detailes</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Username">User Name</Label>
              <Input
                id="UserName"
                name="Name"
                placeholder="User Name"
                type="text"
                value={getsearchparam.get("name")}
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label for="UserAge">User Age</Label>
              <Input
                id="UserAge"
                name="Age"
                placeholder="Your Age"
                value={getsearchparam.get("age")}
                type="text"
                disabled={true}
              />
            </FormGroup>
            <FormGroup>
              <Label for="UserCity">User City</Label>
              <Input
                id="UserCity"
                name="City"
                placeholder="Your City"
                value={getsearchparam.get("city")}
                type="text"
                disabled={true}
              />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
