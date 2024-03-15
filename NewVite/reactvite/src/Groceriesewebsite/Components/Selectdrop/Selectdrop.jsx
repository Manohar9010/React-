import React, { useEffect, useState } from "react";
import "./Selectdrop.css";
import { Input } from "reactstrap";
import { ChevronDown } from "lucide-react";

export default function Selectdrop({ categories, placeholder }) {
  const [opendrop, setOpendrop] = useState(false);
  const [selectindex, setSelectindex] = useState(0);
  const [iteval, setItemval] = useState(placeholder);
  const [search, setSearch] = useState("");
  const [serachdata, setSearchdata] = useState(categories);
  const opendrapfun = () => {
    setOpendrop(!opendrop);
  };

  const Closedrop = (item, index) => {
    setOpendrop(false);
    setSelectindex(index);
    setItemval(item);
    setSearchdata(categories);
  };
  useEffect(() => {
    const list = serachdata.filter((item) => {
      return item.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
    console.log("first", list);
    setSearchdata(list);
    if (search.length === 0) {
      setSearchdata(categories);
    }
  }, [search]);

  return (
    <div>
      <div
        className="allcategore d-flex justify-content-evenly"
        onClick={opendrapfun}
      >
        <div style={{ flex: "2" }}>{iteval}</div>
        <div>
          <ChevronDown color="#191a19" />
        </div>
      </div>

      {opendrop === true && (
        <div className="selectdropdown">
          <div className="searchinput">
            <div>
              <div>
                <Input
                  type="text"
                  onChange={(e) => setSearch(e?.target?.value)}
                  placeholder="Search item.."
                />
              </div>
              <div className="dropscroll">
                <ul>
                  {serachdata.map((e, i) => {
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
