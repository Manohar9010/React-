import React from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'

export default function Register() {
  return (
    <div>
        <div className='mx-96 mb-5'>
        <Form>
  <FormGroup>
    <Label for="first name">
     First Name
    </Label>
    <Input
      id="firstname"
      name="firstname"
      placeholder="First Name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Lastname">
      Last Name
    </Label>
    <Input
      id="Lastname"
      name="Lastname"
      placeholder="Last Name"
      type="text"
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      City
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Surat
      </option>
      <option>
        Vadodara
      </option>
      <option>
        Navsari
      </option>
      <option>
        Bardoli
      </option>
      <option>
        khim
      </option>
    </Input>
  </FormGroup>
 
 
 
  <FormGroup tag="fieldset">
    <legend>
     Gender
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Male
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Female
      </Label>
    </FormGroup>

  </FormGroup>
 
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>

        </div>
       



    </div>
  )
}
