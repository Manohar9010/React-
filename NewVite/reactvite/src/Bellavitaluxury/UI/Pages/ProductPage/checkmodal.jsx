import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function checkmodal() {
    const [control, setcontrol] = useState(false);

    const togglecontrol = () => setcontrol(!control);
  return (
    <div>



<div>
      
      <Modal isOpen={control} toggle={togglecontrol} {...args}>
        <ModalHeader toggle={togglecontrol}>Modal title</ModalHeader>
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
          <Button color="primary" onClick={togglecontrol}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={togglecontrol}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  )
}
