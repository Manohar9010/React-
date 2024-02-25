import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  BadgePlus,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import Swal from "sweetalert2";

export default function Checkbox1() {  
  const [inputval, setInputval] = useState("");
  const [pendingtask, setPendingtask] = useState([]);
  const [donetask, setDonetask] = useState([]);
  const [selectindex, setSelectindex] = useState([]);
  const [selectindex1, setSelectindex1] = useState([]);
  const [allselect, setAllselect] = useState(false);
  const [selectAllPending, setSelectAllPending] = useState(false);

  
  const getdata = () => {
    if (inputval.length > 0) {
      let match=pendingtask.some((e)=>e === inputval)
      console.log("match",match)
      if(match){
        alert("same")
      }else{
        setPendingtask([...pendingtask, inputval]);
        setInputval("");
        localStorage.setItem(
          "pendingstore",
          JSON.stringify([...pendingtask, inputval])
        );
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
     
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Input value is empty!",
      });
    }
  };
  const getdataEnterkey = (e) => {
    if (e.key === "Enter") {
      getdata();
    }
  };
  const pendingfun = (index) => {
    if (confirm("Do You Want Move Single Data")) {
      let fillterdata = pendingtask.filter((e, i) => i !== index);
      setPendingtask(fillterdata);
      setDonetask([...donetask, pendingtask[index]]);
      localStorage.setItem("pendingstore", JSON.stringify(fillterdata)) || "[]";
      localStorage.setItem(
        "donestore",
        JSON.stringify([...donetask, pendingtask[index]])
      );
    } else {
    }
  };
  const doneraskfun = (index1) => {
    if (confirm("Do You Want Move Single Data")) {
      let fillterdata1 = donetask.filter((e, i) => i !== index1);
      setDonetask(fillterdata1);
      setPendingtask([...pendingtask, donetask[index1]]);
      localStorage.setItem(
        "pendingstore",
        JSON.stringify([...pendingtask, donetask[index1]])
      );
      localStorage.setItem("donestore", JSON.stringify(fillterdata1));
    } else {
    }
  };
  const Donedeletefun = (index2) => {
    if (confirm("Do You Want Delete")) {
      let delfillter = donetask.filter((e, i) => i !== index2);
      setDonetask(delfillter);
      localStorage.setItem("donestore", JSON.stringify(delfillter));
    } else {
    }
  };

  const Pendingcheckfun = (index3) => {
    let removecheck = selectindex.includes(index3);
    if (removecheck) {
      // isme check box unselect hotha he
      let filtedata2 = selectindex.filter((e) => e !== index3);
      setSelectindex(filtedata2);
    } else {
      //    isme  check box seleck hotha he
      setSelectindex([...selectindex, index3]);
    }
  };

  const moveSlectedPendingData = () => {
    let filldatapen = [];
    let emptydatapen = [];
    if (confirm("Do You Want Move All Selected Data")) {
      if (confirm("Are You Sure To Move Data")) {
        pendingtask.map((e, index4) => {
          if (selectindex.includes(index4)) {
            filldatapen.push(e);
          } else {
            emptydatapen.push(e);
          }
        });

        setDonetask([...donetask, ...filldatapen]);
        setPendingtask(emptydatapen);
        setSelectindex([]);
        setSelectAllPending(false);
        localStorage.setItem(
          "donestore",
          JSON.stringify([...donetask, ...filldatapen])
        );
        localStorage.setItem("pendingstore", JSON.stringify(emptydatapen));
      } else {
      }
    } else {
    }
  };

  const DoneCheckfun = (index4) => {
    let removecheck1 = selectindex1.includes(index4);
    if (removecheck1) {
      let fillterdata2 = selectindex1.filter((e) => e !== index4);
      setSelectindex1(fillterdata2);
    } else {
      setSelectindex1([...selectindex1, index4]);
    }
  };

  const moveSlectedDoneData = () => {
    let filldata1 = [];
    let emptydata1 = [];

    if (confirm("Do You Want Move All selected Data")) {
      if (confirm("Are You Sure To Move Data")) {
        donetask.map((e, index5) => {
          if (selectindex1.includes(index5)) {
            filldata1.push(e);
          } else {
            emptydata1.push(e);
          }
        });
        setDonetask(emptydata1);
        setPendingtask([...pendingtask, ...filldata1]);
        setSelectindex1([]);
        setAllselect(false);
        localStorage.setItem("donestore", JSON.stringify(emptydata1));
        localStorage.setItem(
          "pendingstore",
          JSON.stringify([...pendingtask, ...filldata1])
        );
      }
    } else {
    }
  };

  const selectallpendingfun = (checval) => {
    setSelectAllPending(checval.target.checked);
    if (checval.target.checked) {
      setSelectindex(pendingtask.map((e, i) => i));
    } else {
      setSelectindex([]);
    }
  };

  const selectalldonefun = (checval2) => {
    setAllselect(checval2.target.checked);
    if (checval2.target.checked) {
      setSelectindex1(donetask.map((e, i) => i));
    } else {
      setSelectindex1([]);
    }
  };

  const donetaskalldeletefun = () => {
    if (confirm("Do You Want Delete All Donetask Data")) {
      if (confirm("Are You Sure To Delete All Data")) {
        setDonetask([]);
        localStorage.setItem("donestore", JSON.stringify([]));
      } else {
      }
    }
  };
  useEffect(() => {
    try {
      let jsonpendata = localStorage.getItem("pendingstore") || "[]";
      let normalpendata = JSON.parse(jsonpendata);
      let jsondonedata = localStorage.getItem("donestore") || "[]";
      let normaldonedata = JSON.parse(jsondonedata);
      if (normaldonedata || normalpendata) {
        setDonetask(normaldonedata);
        setPendingtask(normalpendata);
      }
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      setDonetask([]);
      setPendingtask([]);
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1 className=" bg-primary-subtle border border-primary-subtle rounded-3 py-2 fst-italic text-center my-2">
            Input Value
          </h1>
        </div>
        <div style={{ margin: "auto", marginTop: "50px", width: "400px" }}>
          <InputGroup className="">
            <input
              className="border border-end-0 rounded-start-2  "
              style={{ width: "300px" }}
              type="text"
              onChange={(e) => setInputval([e?.target?.value])}
              value={inputval}
              onKeyPress={getdataEnterkey}
            />

            <Button onClick={getdata} className="bg-success form-control">
              <BadgePlus size={36} color="white" />
            </Button>
          </InputGroup>
        </div>
        <div className="d-flex gap-5 mt-5 border border-info-subtle rounded-3 px-5 py-3 mx-5">
          <div className="w-100">
            <div className="d-flex justify-content-around">
              <h1 className="text-center">Pending Task</h1>
              <Input
                style={{ height: "30px", width: "30px", marginLeft: "120px" }}
                type="checkbox"
                onChange={(e) => selectallpendingfun(e)}
                checked={pendingtask.length === selectindex.length}
              />
            </div>

            <div className="">
              {pendingtask.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="mb-3 px-5 border border-info rounded-2 py-2 d-flex justify-content-around"
                  >
                    <div className="w-100">{e}</div>
                    <div className=" w-75 d-flex justify-content-end align-content-center">
                      <ArrowRightFromLine
                        role="button"
                        onClick={() => pendingfun(i)}
                        size={36}
                        color="#AFE1AF"
                      />
                      <Input
                        checked={selectindex.includes(i)}
                        onChange={() => Pendingcheckfun(i)}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: "15px",
                        }}
                        type="checkbox"
                      />
                    </div>
                    <div></div>
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                style={{ background: "#96DED1" }}
                onClick={moveSlectedPendingData}
              >
                Move Selected Data
              </Button>
            </div>
          </div>
          <div className="w-100">
            <div className=" d-flex justify-content-around">
              <h1 className="text-center">Done Task</h1>
              <div>
                <Button
                  onClick={donetaskalldeletefun}
                  style={{
                    height: "40px",
                    marginLeft: "120px",
                    background: "red",
                  }}
                >
                  DeleteAll
                </Button>
                <Input
                  style={{ height: "30px", width: "30px", marginLeft: "20px" }}
                  type="checkbox"
                  onChange={(e) => selectalldonefun(e)}
                  // checked={}
                />
              </div>
            </div>
            <div className="">
              {donetask.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border border-info mb-3 rounded-2 py-2 d-flex justify-content-around"
                  >
                    <div className="w-100 ps-5">{e}</div>
                    <div className=" w-75 d-flex px-5 justify-content-end align-content-center">
                      <ArrowLeftFromLine
                        role="button"
                        size={36}
                        color="#AFE1AF"
                        onClick={() => doneraskfun(i)}
                      />
                      <Trash2
                        onClick={() => Donedeletefun(i)}
                        role="button"
                        size={36}
                        color="#d75b3c"
                      />

                      <Input
                        style={{
                          width: "25px",
                          height: "30px",
                          marginLeft: "15px",
                          marginTop: "4px",
                        }}
                        type="checkbox"
                        checked={selectindex1.includes(i)}
                        onChange={() => DoneCheckfun(i)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              style={{ background: "#96DED1" }}
              onClick={moveSlectedDoneData}
            >
              Move Selected Data
            </Button>
          </div>
        </div>
      </div>

      <h4>{inputval}</h4>
    </div>
  );
}
