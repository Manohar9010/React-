import React, { useState } from "react";
import { Button, Input, Label, Table } from "reactstrap";

export default function CrudTask() {
  const [inputval, setInputval] = useState("");
  const [alldata, setAlldata] = useState([]);
  const Adddata = () => {
    if (inputval.length > 0) {
      setAlldata([...alldata, inputval]);
      setInputval("");
      localStorage.setItem("passdata", JSON.stringify(alldata));
    }
  };
  const Daletedata = (index) => {
    let fillterdata = alldata.filter((e, i) => i !== index);
    setAlldata([fillterdata]);
  };
  const Editdata = () => {};
  return (
    <div>
      <div className="m-auto mt-5 alin text-center align-middle">
        <Label>Input Value</Label>
        <Input
          type="text"
          className="w-50  ms-5"
          value={inputval}
          onChange={(e) => setInputval(e?.target?.value)}
        />
        <Button onClick={Adddata}>ADD DATA</Button>
        {/* <h1>{alldata}</h1> */}

        <div>
          <Table>
            <thead>
              <tr>
                <th>sr.</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              {alldata.map((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{e}</td>
                    <td>
                      <Input
                        role="button"
                        onClick={() => Daletedata(i)}
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <Button onClick={Editdata}>Edit</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
