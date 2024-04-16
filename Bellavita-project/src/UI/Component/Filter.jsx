import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

const genderstype = ["male", "female"];
const quantity = ["100ml", "250ml", "300ml"];

export default function Filter({ setFilter, filter, open ,intialvalue}) {
  const CleardataHandler = () => {
    setFilter(intialvalue);
  };
  const checkhandler = (checkvalue) => {
    if (filter.size.includes(checkvalue)) {
      let fillterdata = filter.size.filter((e) => e !== checkvalue);
      setFilter({ ...filter, size: fillterdata });
    } else {
      setFilter({ ...filter, size: [...filter.size, checkvalue] });
    }
  };
  return (
    <div className="" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="">
        <div>
          <div>
            {open && (
              <div className="filterbar">
                <FormGroup>
                  <Label>Min Price</Label>
                  <Input
                    type="range"
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        price: e?.target?.value * 10,
                      })
                    }
                  />
                  <p>Min Value:{filter.minrange}</p>
                </FormGroup>
                <FormGroup>
                  <Label>Max Price</Label>
                  <Input
                    type="range"
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        maxrange: e?.target?.value * 10,
                      })
                    }
                  />
                  <p>Max Value:{filter.maxrange}</p>
                </FormGroup>
                <Label>Gender</Label>
                <FormGroup className="d-flex gap-3 m-0 p-0">
                  {genderstype.map((e, i) => {
                    return (
                      <FormGroup key={i}>
                        <Label>{e}</Label>&nbsp;
                        <Input
                          type="radio"
                          name="gender"
                          checked={filter.gender == e}
                          onChange={() => setFilter({ ...filter, gender: e })}
                        />
                      </FormGroup>
                    );
                  })}
                </FormGroup>
                <Label>Size</Label>
                <FormGroup className="d-flex gap-3 ">
                  {quantity.map((e, i) => {
                    return (
                      <FormGroup key={i}>
                        <Label>{e}</Label>&nbsp;
                        <Input
                          type="checkbox"
                          checked={filter.size.includes(e)}
                          onChange={() => checkhandler(e)}
                        />
                      </FormGroup>
                    );
                  })}
                </FormGroup>
                <div>
                  <Button
                    className="bg-dark "
                    onClick={() => CleardataHandler()}
                  >
                    Clear Fillter
                  </Button>
                </div>
              </div>
            )}
          </div>
             
        </div>
      </div>

      <div></div>
    </div>
  );
}
