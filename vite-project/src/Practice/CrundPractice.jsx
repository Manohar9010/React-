import { Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Table } from "reactstrap";
import "./CrundPractice.css";

export default function CrundPractice() {
  const [inputval, setInputval] = useState();
  const [alldata, setAalldata] = useState([]);
  const [updateindex, setUpdateindex] = useState(null);

  const AddData = () => {
    if (inputval.length > 0) {
      setAalldata([...alldata, inputval]);
      localStorage.setItem("passdata", JSON.stringify([...alldata, inputval]));
      setInputval("");
      toast.success("Success");
    } else {
      toast.error("Enter value");
    }
  };
  useEffect(() => {
    let josndata = localStorage.getItem("passdata") || "[]";
    let normaldata = JSON.parse(josndata);
    setAalldata(normaldata);
  }, []);
  const DeleteFun = (index) => {
    let filetrdata = alldata.filter((e, i) => {
      return i !== index;
    });
    setAalldata(filetrdata);
    localStorage.setItem("passdata", JSON.stringify(filetrdata));
    toast.info("Data Delete");
  };
  const Editfun = (e, i) => {
    setInputval(e);
    setUpdateindex(i);
  };
  const Updatafun = () => {
    if (updateindex || updateindex === 0) {
      alldata.splice(updateindex, 1, inputval);
      setInputval([...alldata]);
      localStorage.setItem("passdata", JSON.stringify([...alldata]));
      setInputval("");
      setUpdateindex(null);
    }
  };

  return (
    <div className="" style={{ margin: "" }}>
      <h1 className="text-center fst-italic" style={{ color: "#008080" }}>
        Input Value
      </h1>
      <div
        className="box w-25 mx-auto "
        style={{
          height: "200px",
          display: "block",
          paddingTop: "40px",
          marginTop: "20px",
        }}
      >
        <Input
          type="text"
          value={inputval}
          onChange={(e) => setInputval(e?.target?.value)}
        />

        {!(updateindex || updateindex === 0) ? (
          <Button
            onClick={AddData}
            className="w-50  mt-4 btn-primary"
            style={{ marginLeft: "75px", backgroundColor: "#6495ED" }}
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={Updatafun}
            className="w-50  mt-4 btn-primary"
            style={{ marginLeft: "75px", backgroundColor: "#FF7F50" }}
          >
            Update
          </Button>
        )}
      </div>

      <div className="w-75 mx-auto mt-5">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Input Value</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                  <Input onClick={() => DeleteFun(i)} type="checkbox" /> Delete
                </td>
                <td>
                  <Pencil
                    color="black"
                    role="button"
                    onClick={() => Editfun(e, i)}
                  />
                  {/* <Pencilsquare/> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
