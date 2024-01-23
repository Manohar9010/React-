import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function Todopending({

  pendingdata,
  setPendingdata,
  donetask,
  setDonetask,
}) {
  const [searchbox, setsearchbox] = useState("");
  const [selectindex, setSelectindex] = useState([]);
  const [selectAllPending, setSelectAllPending] = useState([]);
  const movedatafun = (index) => {
    if (confirm("Do you want move the data!")) {
      setDonetask([...donetask, pendingdata[index]]);
      let fillterdata = pendingdata.filter((e, i) => {
        return i !== index;
      });
      setPendingdata(fillterdata);
      localStorage.setItem(
        "passdata",
        JSON.stringify([...donetask, pendingdata[index]])
      );

      localStorage.setItem("pendindata", JSON.stringify(fillterdata));
    } else {
    }
  };
  console.log(selectindex);
  const multiselctfun = (ell) => {
    setSelectAllPending;
    if (ell.target.checked) {
      setSelectindex(pendingdata.map((e, i) => i));
    } else {
      setSelectindex([]);
    }
  };

  const pendingcheckfun = (index) => {
    let avalible = selectindex.includes(index);

    if (avalible) {
      let fillterdata = selectindex.filter((e) => e !== index);
      setSelectindex(fillterdata);
    } else {
      setSelectindex([...selectindex, index]);
    }
  };

  const pendingselectfun = () => {
    let filldata = [];
    let empty = [];
    if (confirm("do you want move data to done list")) {
      if (confirm("Are you sure")) {
        pendingdata.map((ele, index1) => {
          if (selectindex.includes(index1)) {
            filldata.push(ele);
          } else {
            empty.push(ele);
          }
          setDonetask([...donetask, ...filldata]);
          setPendingdata(empty);
          setSelectindex([]);
          ``;
          localStorage.setItem("pendindata", JSON.stringify(empty));
          localStorage.setItem(
            "passdata",
            JSON.stringify([...donetask, ...filldata])
          );
        });
      } else {
      }
    } else {
    }
  };
   // useEffect(()=>{
  //  let data=JSON.  parse (localStorage.getItem("pendindata") || "[]")
  //  let fillterdata3=data.filter((e)=>e.includes(searchbox))
  //  setPendingdata(fillterdata3)
  // },[searchbox])
  const handleSearch = () => {
   
    let data = JSON.parse(localStorage.getItem("pendindata") || "[]");
    let fillterdata3 = data.filter((e) =>
      e.toLowerCase().includes(searchbox.toLowerCase())
    );
    setPendingdata(fillterdata3);
  };
  useEffect(()=>{
    if(searchbox===0){
      let data1 = JSON.parse(localStorage.getItem("pendindata") || "[]");
      setPendingdata(data1)
    }
  })

  return (
    <div>
      <div className="d-flex me-5  w-100 ">
        <div
          className=" rounded-4 mx-auto mt-5 border border-info"
          style={{ width: "550px" }}
        >
          <div className="d-flex gap-2">
            <h1 className="text-center ps-2">PendingTask</h1>
            <Input
              value={searchbox}
              onChange={(e) => setsearchbox(e?.target?.value)}
              style={{ height: "35px", marginTop: "10px", width: "150px" }}
              type="text"
            
            />

            <Button
              style={{ height: "35px", marginTop: "10px" }}
              onClick={handleSearch}
            >
              Search
            </Button>

            <Input
              style={{
                width: "35px",
                height: "35px",
                marginLeft: "px",
                marginTop: "10px",
              }}
              type="checkbox"
              checked={pendingdata.length===selectindex.length}
              onChange={(ell) => multiselctfun(ell)}
            />
          </div>

          {pendingdata.map((e, i) => {
            return (
              <ul
                key={i}
                className="border border-info-subtle pe-4 py-2 mx-4 d-flex justify-content-between rounded-2"
              >
                <li className=" w-75 fs-5 px-3 pt-1 me-4">{e}</li>
                <li>
                  <Button className="m-0" onClick={() => movedatafun(i)}>
                    Move
                  </Button>{" "}
                </li>
                <li>
                  <Input
                    style={{
                      width: "20px",
                      height: "30px",
                      marginLeft: "10px",
                    }}
                    checked={selectindex.includes(i)}
                    onChange={() => pendingcheckfun(i)}
                    type="checkbox"
                  />
                </li>
              </ul>
            );
          })}
          <Button style={{ marginLeft: "180px" }} onClick={pendingselectfun}>
            MoveSelected data
          </Button>
        </div>
      </div>
    </div>
  );
}
