import React from "react";
import SweetAlert from "react-bootstrap-sweetalert"; // Import SweetAlert component from the correct package
import { Button } from "reactstrap";

export default function SweetAlertComponent() {
  const gettt = () => {
    // Define the state to control the visibility of the SweetAlert
    const [showAlert, setShowAlert] = React.useState(true);

    // Function to handle the confirmation
    const handleConfirm = () => {
      // Your logic for confirmation
      console.log("Confirmed");
      setShowAlert(false); // Hide the SweetAlert after confirmation
    };

    // Function to handle the cancellation
    const handleCancel = () => {
      // Your logic for cancellation
      console.log("Cancelled");
      setShowAlert(false); // Hide the SweetAlert after cancellation
    };

    return (
      <div>
        <SweetAlert
          show={showAlert} // Use the show property to control the visibility of the SweetAlert
          warning
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={handleConfirm} // Pass the function reference for confirmation
          onCancel={handleCancel} // Pass the function reference for cancellation
          focusCancelBtn
        >
          {/* Add your content for the SweetAlert here */}
        </SweetAlert>
        <Button onClick={() => setShowAlert(true)}>click</Button>{" "}
        {/* Show the SweetAlert on button click */}
      </div>
    );
  };

  return (
    <div>
      <h1>SweetAlert Example</h1>
      {gettt()} {/* Call the gettt function to render the SweetAlert */}
    </div>
  );
}
