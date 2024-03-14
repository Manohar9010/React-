import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function ModelPreview({modal1,setModal1,toggle1}) {
    
  return (
    <div>
     <div>
      <Button color="danger" onClick={toggle1}>
        Click Me
      </Button>
      <Modal isOpen={modal1} toggle={toggle1} >
        <ModalHeader toggle={toggle1}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle1}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle1}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>

    </div>
  )
}
