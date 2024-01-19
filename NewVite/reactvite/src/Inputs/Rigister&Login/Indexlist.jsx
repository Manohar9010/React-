import { BadgeDollarSign } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import Todopending from "./Todopending";
import TodoDone from "./TodoDone";

export default function Indexlist() {
  const [inputval, setInput] = useState("");
  const [pendingdata, setPendingdata] = useState([]);
  const [donetask, setDonetask] = useState([]);
  const getdata = () => {
    if (inputval.length > 0) {
      setPendingdata([...pendingdata, inputval]);
      setInput("");
      localStorage.setItem(
        "pendindata",
        JSON.stringify([...pendingdata, inputval])
      );
    } else {
      alert("Enter the value!");
    }
  };
  const handleKeyPress = (e) => {
    if (inputval.length > 0) {
      if (e.key === "Enter") {
        getdata();
      }
    }
  };
  useEffect(() => {
    try {
      let jsondata = localStorage.getItem("passdata") || "[]";
      const normaldata = JSON.parse(jsondata);

      let jsondata1 = localStorage.getItem("pendindata") || "[]";
      const normal1 = JSON.parse(jsondata1);
      if (normaldata || normal1) {
        setDonetask(normaldata);
        setPendingdata(normal1);
      }
    } catch (error) {
      // Handle the error, e.g. log it or set a default value for donetask
      console.error("Error parsing JSON data:", error);
      // Set a default value for donetask if parsing fails
      setDonetask([]);
      setPendingdata([]);
    }
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center fst-italic mt-5 text-bg-light text-info-emphasis">
          Input Value
        </h1>
        <div className="w-25  mx-auto mt-5 input-group">
          <InputGroup>
            <Input
              className="form-control"
              value={inputval}
              type="text"
              onChange={(e) => setInput(e?.target?.value)}
              onKeyPress={handleKeyPress}
            />

            <Button className=" " onClick={getdata}>
              Click <BadgeDollarSign />
            </Button>
          </InputGroup>
          <div></div>
        </div>
      </div>
      <div className="d-flex gap-5 mx-5">
        <div>
          <Todopending
            inputval={inputval}
            setInput={setInput}
            pendingdata={pendingdata}
            setPendingdata={setPendingdata}
            donetask={donetask}
            setDonetask={setDonetask}
          />
        </div>
        <div>
          <TodoDone
            inputval={inputval}
            setInput={setInput}
            pendingdata={pendingdata}
            setPendingdata={setPendingdata}
            donetask={donetask}
            setDonetask={setDonetask}
          />
        </div>
      </div>
    </div>
  );
}

/*
import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import { BadgeDollarSign } from "lucide-react";
export default function ToDoListrout() {
  const [inputval, setInput] = useState("");
  const [pendingdata, setPendingdata] = useState([]);
  const [donetask, setDonetask] = useState([]);
  const [selectindex, setSelectindex] = useState([]);
  const [selectindex1, setSelectindex1] = useState([]);
  const [selectAllPending, setSelectAllPending] = useState([]);
  const [searchbox, setsearchbox] = useState("");
  const getdata = () => {
    if (inputval.length > 0) {
      setPendingdata([...pendingdata, inputval]);
      setInput("");
      localStorage.setItem(
        "pendindata",
        JSON.stringify([...pendingdata, inputval])
      );
    } else {
      alert("Enter the value!");
    }
  };
  const handleKeyPress = (e) => {
    if (inputval.length > 0) {
      if (e.key === "Enter") {
        getdata();
      }
    }
  };
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
  const deletefun = (index) => {
    if (confirm("Do You Want Delete Data ")) {
      let deletfillter = donetask.filter((e, i) => i !== index);
      setDonetask(deletfillter);

      localStorage.setItem("passdata", JSON.stringify(deletfillter));
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

  useEffect(() => {
    try {
      let jsondata = localStorage.getItem("passdata") || "[]";
      const normaldata = JSON.parse(jsondata);

      let jsondata1 = localStorage.getItem("pendindata") || "[]";
      const normal1 = JSON.parse(jsondata1);
      if (normaldata || normal1) {
        setDonetask(normaldata);
        setPendingdata(normal1);
      }
    } catch (error) {
      // Handle the error, e.g. log it or set a default value for donetask
      console.error("Error parsing JSON data:", error);
      // Set a default value for donetask if parsing fails
      setDonetask([]);
      setPendingdata([]);
    }
  }, []);

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

  const Doneselectfun = (index2) => {
    let available1 = selectindex1.includes(index2);
    if (available1) {
      let filldata1 = selectindex1.filter((e) => e !== index2);
      setSelectindex1(filldata1);
    } else {
      setSelectindex1([...selectindex1, index2]);
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
  console.log(selectindex);
  const multiselctfun = (ell) => {
    setSelectAllPending;
    if (ell.target.checked) {
      setSelectindex(pendingdata.map((e, i) => i));
    } else {
      setSelectindex([]);
    }
  };

  const multiselctfundone = (val) => {
    if (val.target.checked) {
      setSelectindex1(donetask.map((e, i) => i));
    } else {
      setSelectindex1([]);
    }
  };

  // useEffect(()=>{
  //  let data=JSON.  parse (localStorage.getItem("pendindata") || "[]")
  //  let fillterdata3=data.filter((e)=>e.includes(searchbox))
  //  setPendingdata(fillterdata3)
  // },[searchbox])

  const handleSearch = () => {
    let data = JSON.parse(localStorage.getItem("pendindata") || "[]");
    let fillterdata3 = data.filter((e) => e.toLowerCase().includes(searchbox.toLowerCase()));
    setPendingdata(fillterdata3);
  };
  return (
    <div>
      <div>
        <h1 className="text-center fst-italic mt-5 text-bg-light text-info-emphasis">
          Input Value
        </h1>
        <div className="w-25  mx-auto mt-5 input-group">
          <InputGroup>
            <Input
              className="form-control"
              value={inputval}
              type="text"
              onChange={(e) => setInput(e?.target?.value)}
              onKeyPress={handleKeyPress}
            />

            <Button className=" " onClick={getdata}>
              Click <BadgeDollarSign />
            </Button>
          </InputGroup>
          <div></div>
        </div>
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
          <div
            className=" rounded-4 mx-auto mt-5 border border-info"
            style={{ width: "599px" }}
          >
            <div className="d-flex ">
              <h1 className="text-center px-5 ">Done Task</h1>
              <Button
                style={{
                  height: "40px",
                  marginTop: "7px",
                  marginLeft: "150px",
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
         
    </div>
  );
}
*/
