import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function TodoDone({

  pendingdata,
  setPendingdata,
  donetask,
  setDonetask,
}) {
  const [selectindex1, setSelectindex1] = useState([]);
  const [searchbox1,setSeachbox]=useState("")
  const Returndata = (index) => {
    if (confirm("Do you want move the data!")) {
      setPendingdata([...pendingdata, donetask[index]]);
      let refilter = donetask.filter((e, i) => {
        return i !== index;
      });
      setDonetask(refilter);
      localStorage.setItem("passdata", JSON.stringify(refilter));
      localStorage.setItem(
        "pendindata",
        JSON.stringify([...pendingdata, donetask[index]])
      );
    } else {
    }
  };
  const Alldeletfun = () => {
    if (confirm("Do you want delete all done list data")) {
      if (confirm("Are You Sure")) {
        setDonetask([]);
        localStorage.setItem("passdata", JSON.stringify([]));
      } else {
      }
    } else {
    }
  };
  const 
  Doneselectfun = (index2) => {
    let available1 = selectindex1.includes(index2);
    if (available1) {
      let filldata1 = selectindex1.filter((e) => e !== index2);
      setSelectindex1(filldata1);
    } else {
      setSelectindex1([...selectindex1, index2]);
    }
  };
  const deletefun = (index) => {
    if (confirm("Do You Want Delete Data ")) {
      let deletfillter = donetask.filter((e, i) => i !== index);
      setDonetask(deletfillter);

      localStorage.setItem("passdata", JSON.stringify(deletfillter));
    } else {
    }
  };
  const donedatamovefun = () => {
    let empty1 = [];
    let filldata1 = [];

    if (confirm("Do you want move data to pending list")) {
      if (confirm("Are you sure")) {
        donetask.map((e, i) => {
          if (selectindex1.includes(i)) {
            filldata1.push(e);
          } else {
            empty1.push(e);
          }
          setPendingdata([...pendingdata, ...filldata1]);
          setDonetask(empty1);
          setSelectindex1([]);

          localStorage.setItem(
            "pendindata",
            JSON.stringify([...pendingdata, ...filldata1])
          );
          localStorage.setItem("passdata", JSON.stringify(empty1));
        });
      } else {
      }
    } else {
    }
  };
  const multiselctfundone = (val) => {
    if (val.target.checked) {
      setSelectindex1(donetask.map((e, i) => i));
    } else {
      setSelectindex1([]);
    }
  };
  useEffect(()=>{
    let data1=JSON.parse (localStorage.getItem("passdata") || "[]")
    let fillterdata1=data1.filter((e)=>e.toLowerCase() .includes( searchbox1.toLowerCase()))
    setDonetask(fillterdata1)
  },[searchbox1])

  return (
    <div>
      <div>
        <div
          className=" rounded-4 mx-auto mt-5 border border-info"
          style={{ width: "599px" }}
        >
          <div className="d-flex ">
            <h1 className="text-center px-5 ">Done Task</h1>
            <Input style={{height:"35px",width:"150px",marginTop:"10px"}} type="text"
              value={searchbox1}
             onChange={(e)=>setSeachbox(e?.target?.value)}
             
            />
            <Button
              style={{
                height: "40px",
                marginTop: "7px",
                marginLeft: "15px",
              }}
              onClick={Alldeletfun}
            >
              Alldelet
            </Button>
            <Input
              style={{
                width: "35px",
                height: "35px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
              type="checkbox"
              checked={donetask.length === selectindex1.length}
              onChange={(val) => multiselctfundone(val)}
            />
          </div>
          {donetask.map((e, i) => {
            return (
              <ul
                key={i}
                className="border border-info-subtle pe-4 py-2 mx-4 d-flex justify-content-between rounded-2"
              >
                <li className="fs-5 w-75 pt-1 px-3 me-5 ">{e}</li>
                <li className="d-flex gap-3 ms-5 w-100">
                  <Button className="m-0" onClick={() => Returndata(i)}>
                    Return&nbsp;Move
                  </Button>{" "}
                  <Button className="m-0" onClick={() => deletefun(i)}>
                    delete
                  </Button>
                </li>
                <li>
                  <Input
                    style={{
                      width: "20px",
                      height: "30px",
                      marginLeft: "10px",
                    }}
                    onChange={() => Doneselectfun(i)}
                    checked={selectindex1.includes(i)}
                    type="checkbox"
                  />
                </li>
              </ul>
            );
          })}
          <Button style={{ marginLeft: "220px" }} onClick={donedatamovefun}>
            MoveSelected Data
          </Button>
        </div>
      </div>
    </div>
  );
}
