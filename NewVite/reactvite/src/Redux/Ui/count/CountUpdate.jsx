import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import {
  inOne,
  inamount,
  inpointer,
  inten,
  lessamoutn,
} from "../../redux/Fetures/Count";

export default function CountUpdate() {
  let dispach = useDispatch();
  return (
    <div className="">
      <Button className="bg-danger me-5" onClick={() => dispach(inOne())}>
        inc+1
      </Button>
      <Button className="bg-danger me-5" onClick={() => dispach(inten())}>
        inc+10
      </Button>
      <Button className="bg-danger me-5" onClick={() => dispach(inamount())}>
        inc+10
      </Button>
      <Button className="bg-danger me-5" onClick={() => dispach(inpointer())}>
        inc+.5
      </Button>
      <Button className="bg-danger" onClick={() => dispach(lessamoutn())}>
        inc----
      </Button>
    </div>
  );
}
