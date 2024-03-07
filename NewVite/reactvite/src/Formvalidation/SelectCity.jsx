import React, { useState } from "react";
import "./SelectCity.css";
import { Input } from "reactstrap";
import { ChevronDown } from "lucide-react";

export default function Selectcity({ city,setUserdata,userdata}) {
  const [opendrop, setOpendrop] = useState(false);
  const [selectindex, setSelectindex] = useState(0);
  const [iteval, setItemval] = useState("city");
  const opendrapfun = () => {
    setOpendrop(!opendrop);
  };

  const Closedrop = (item, index) => {
    setOpendrop(false);
    setSelectindex(index);
    setItemval(item);
      setUserdata({...userdata,city:item})
  };
  return (
    <div>
      <div className="allcategore d-flex justify-content-evenly" onClick={opendrapfun}>
        <div style={{flex:"2"}}>

        {iteval}
        </div>
        <div>
       <ChevronDown color="#191a19" />
       </div>
      </div>
      

      {opendrop === true && (
        <div className="">
          <div className="">
            <div>
              
              <div className="dropscroll">
                <ul>
                  {city.map((e, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => Closedrop(e, i)}
                        className={`${selectindex === i ? "active" : ""}`}
                      >
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
