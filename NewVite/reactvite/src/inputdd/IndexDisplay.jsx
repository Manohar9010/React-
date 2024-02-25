import React, { useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import PendingPage from "./PendingPage";
import DonePage from "./DonePage";
import { PlusCircle } from "lucide-react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function IndexDisplay() {
  const [user, setUser] = useState("");
  const [pending, setPending] = useState([]);
  const [done, setDone] = useState([]);

  const getdata = () => {
    if (user.length > 0) {
      setPending([...pending, user]);
      localStorage.setItem("pending", JSON.stringify([...pending, user]));

      setUser("");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      // alert("enter data");
      toast.error("Enter Data")
      
    }
  };
  const enterbutton = (e) => {
    if (e.key === "Enter") {
      getdata();
    }
  };
  return (
    <div>
      <div className="w-25 m-auto mt-5">
        <h1 className="text-center mb-5 bg bg-info-subtle rounded py-2">Input Value</h1>
        <InputGroup>
          <Input
            type="text"
            value={user}
            onKeyPress={enterbutton}
            onChange={(e) => setUser(e?.target?.value)}
          />
          <Button onClick={() => getdata()}><PlusCircle color="white" /></Button>
        </InputGroup>
      </div>

      <div className="d-flex gap-5 m-auto mt-5 justify-content-center">
        <PendingPage
          user={user}
          setUser={setUser}
          pending={pending}
          setPending={setPending}
          setDone={setDone}
          done={done}
        />
        <DonePage
          user={user}
          setUser={setUser}
          pending={pending}
          setPending={setPending}
          setDone={setDone}
          done={done}
        />
      </div>
    </div>
  );
}
