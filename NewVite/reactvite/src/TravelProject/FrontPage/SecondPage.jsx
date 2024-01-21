import React, { useState } from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function SecondPage() {
  const [tripplane, setTrippalne] = useState({
    Name: "",
    destination: "",
    activity: "",
    duration: "",
    date: "",
  });
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
  ];
  const options1 = [
    { value: "City Tourds", label: "City Tourds" },
    { value: "Culturl & Thematic Tpurs", label: "Culturl & Thematic Tpurs" },
    { value: "Family Frendly Tours", label: "Family Frendly Tours" },
    { value: "Holiday & Seasonal Tours", label: "Holiday & Seasonal Tours" },
    { value: "Indulgene & Luxury Tours", label: "Indulgene & Luxury Tours" },
  ];

  const options2 = [
    { value: "1 Day Tour", label: "1 Day Tour" },
    { value: "2-4 Days Tour", label: "2-4 Days Tour" },
    { value: "5-7 Days Tour", label: "5-7 Days Tour" },
    { value: "7+ days Tour", label: "7+ days Tour" },
  ];
  const getdatatraveplane = (e) => {
    e.preventDefault();
    let jsondata = localStorage.getItem("tripplanesote") || "[]";
    let normal = JSON.parse(jsondata || "[]");

    localStorage.setItem(
      "tripplanesote",
      JSON.stringify([...normal, tripplane])
    );
    setTrippalne({
      Name: "",
      destination: "",
      activity: "",
      duration: "",
      date: "",
    });
  };

  return (
    <div>
      <div style={{ margin: "50px 0px 80px 90px" }}>
        <h1>
          Get The Best Holiday Planned By <br /> Experts!
        </h1>
      </div>
      <div className="d-flex justify-content-around" style={{ gap: "100px" }}>
        <Form onSubmit={getdatatraveplane}>
          <FormGroup className=" d-flex" style={{ gap: "150px" }}>
            <FormGroup>
              <Label
                style={{ color: "grey", fontSize: "20px", fontWeight: "400" }}
                for="name"
              >
                Name
              </Label>
              <Input
                style={{ width: "300px" }}
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                value={tripplane.Name}
                onChange={(e) =>
                  setTrippalne({ ...tripplane, Name: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup style={{ width: "300px" }}>
              <Label
                style={{ color: "grey", fontSize: "20px", fontWeight: "400" }}
                for="examplePassword"
              >
                Destination
              </Label>
              <Select
                placeholder="Select destination"
                onChange={(e) =>
                  setTrippalne({ ...tripplane, destination: e?.value })
                }
                options={options}
              />
            </FormGroup>
            <FormGroup style={{ width: "300px" }}>
              <Label
                style={{ color: "grey", fontSize: "20px", fontWeight: "400" }}
                for="examplePassword"
              >
                Activity
              </Label>
              <Select
                placeholder="Select activity"
                onChange={(e) =>
                  setTrippalne({ ...tripplane, activity: e?.value })
                }
                options={options1}
              />
            </FormGroup>
          </FormGroup>
          <FormGroup className=" d-flex" style={{ gap: "150px" }}>
            <FormGroup style={{ width: "300px" }}>
              <Label
                style={{ color: "grey", fontSize: "20px", fontWeight: "400" }}
                for="examplePassword"
              >
                Duration
              </Label>
              <Select
                placeholder="Select duration"
                options={options2}
                onChange={(e) =>
                  setTrippalne({ ...tripplane, duration: e?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label
                style={{ color: "grey", fontSize: "20px", fontWeight: "400" }}
                for="examplePassword"
              >
                Date
              </Label>
              <Input
                style={{
                  width: "300px",
                  color: "grey", // Placeholder color
                }}
                id="date"
                name="date"
                value={tripplane.date}
                onChange={(e) =>
                  setTrippalne({ ...tripplane, date: e?.target?.value })
                }
                placeholder="password placeholder"
                type="Date"
              />
            </FormGroup>
            <FormGroup>
              <Label
                style={{ color: "grey", fontSize: "20px", fontWeight: "400" }}
                for="exampleEmail"
              >
                Submit
              </Label>
              <br />
              <Button
                className="btn btn-info text-white"
                style={{ width: "300px" }}
              >
                Submit
              </Button>
            </FormGroup>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
