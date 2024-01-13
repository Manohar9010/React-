// import "./index.css";
import { FileEdit, Minus, Plus, Slash, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Label } from "reactstrap";

export default function ToDoListtask() {
  let [todo, setTodo] = useState("");
  let [pendingTask, set_pendingTask] = useState([]);
  let [doneTask, setDoneTask] = useState([]);
  let [select, setSelect] = useState([]);
  let [remove, setRemove] = useState([]);
  let [index, setIndex] = useState(null);

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   if (todo.length > 0) {
  //     const match = pendingTask.some((e) => {
  //       return e === todo;
  //     });
  //     if (match) {
  //       toast.error("Same Data Already Exists");
  //     } else {
  //       set_pendingTask([...pendingTask, todo]);
  //       setTodo("");
  //       localStorage.setItem(
  //         "task",
  //         JSON.stringify({ pendingTask: [...pendingTask, todo], doneTask })
  //       );
  //       toast.success("Data Added Successfully");
  //     }
  //   } else {
  //     toast.error("Please Fill The Input");
  //   }
  // };

  const addData = (e) => {
    e?.preventDefault();
    const newTodo = [...pendingTask, todo];
    set_pendingTask(newTodo);
    localStorage.setItem("task", JSON.stringify(newTodo));
    setTodo("");
  };

  useEffect(() => {
    let json_data = JSON.parse(localStorage.getItem("task")) || [];
    set_pendingTask(json_data);
    let removedData = JSON.parse(localStorage.getItem("removeData")) || [];
    setDoneTask(removedData);
  }, []);

  const deleteHandler = (index) => {
    let filter_data = doneTask.filter((e, i) => i != index);
    setDoneTask(filter_data);
    localStorage.setItem("removeData", JSON.stringify(filter_data));
    toast.info("Data Remove Successfully");
  };



  const checkHAndler = (index) => {
    let match = select.includes(index);
    console.log("🚀 ~ checkHAndler ~ match:", match);
    if (match) {
      setSelect(select.filter((e) => e !== index));
    } else {
      setSelect([...select, index]);
    }
  };

  const removeSelectHandler = (index) => {
    let match = remove.includes(index);
    if (match) {
      setRemove(remove.filter((e) => e !== index));
    } else {
      setRemove([...remove, index]);
    }
  };




  const submitHandler = () => {
    console.log("------");
    let notDone = [];
    let done = [];
    pendingTask.map((e, i) => {
      if (select?.includes(i)) {
        done.push(e);
      } else {
        notDone.push(e);
      }
      set_pendingTask(notDone);
      setDoneTask([...doneTask, ...done]);
      localStorage.setItem(
        "removeData",
        JSON.stringify([...doneTask, ...done])
      );
      localStorage.setItem("task", JSON.stringify(notDone));
      setSelect([]);
    });
  };

  const removeHandler = () => {
    let notDone = [];
    let done = [];
    doneTask.map((e, i) => {
      if (remove?.includes(i)) {
        notDone.push(e);
      } else {
        done.push(e);
      }
      setDoneTask(done);
      set_pendingTask([...pendingTask, ...notDone]);
      localStorage.setItem("removeData", JSON.stringify(done));
      localStorage.setItem(
        "task",
        JSON.stringify([...pendingTask, ...notDone])
      );
      setRemove([]);
    });
  };

  return (
    <>
      <div className="w-25 m-auto mt-3 p-3">
        <Label className="m-auto p-2 light">
          <h1>TodoList</h1>
        </Label>
        <div>
          <form onSubmit={addData}>
            <div className="d-flex align-items-center">
              <Input
                value={todo}
                style={{
                  borderRadius: "50px",
                  // backgroundColor: "lightblue",
                  width: "300px",
                  height: "40px",
                  justifyContent: "center",
                  textAlign: "center",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                placeholder="Enter Your Todo"
                onChange={(ele) => setTodo(ele.target.value)}
              />

<Button
                color="danger"
                onClick={() => addData()}
                style={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                <Plus />
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex w-100 gap-4 p-5">
        <div>
          <div
            class="content"
            className="m-auto"
            style={{
              margin: "40px",
              width: "700px",
              justifyContent: "center",
            }}
          >
            <div class="notebook-page">
              {pendingTask.length > 0 ? (
                <div>
                  <h3
                    className="text-center p-2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "30px",
                      padding: "10px",
                      color: "#332556",
                    }}
                  >
                    {" "}
                    PendingList
                  </h3>
                  <div className="mt-5">
                    {pendingTask.map((e, i) => {
                      return (
                        <div style={{ width: "100%" }} key={i}>
                          <div
                            className="border-bottom border-1 dark pb-2 w-100  gap-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ paddingRight: "20px" }}>
                              <h
                                className="dud"
                                style={{ paddingLeft: "45px" }}
                              >
                                {i + 1}.
                              </h>
                            </div>
                            <div
                              style={{
                                display: "flex",

                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <h3> {e}</h3>
                              <div className="m-2">
                                <Input
                                  type="checkbox"
                                  style={{
                                    padding: "10px",
                                    borderRadius: "50px",
                                    marginRight: "2px",
                                    border: "2px solid red",
                                  }}
                                  checked={select.includes(i)}
                                  onClick={() => checkHAndler(i)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center mt-5">
                    <Button onClick={submitHandler} color="danger">
                      Submit
                    </Button>
                  </div>
                </div>
              ) : (
                <h1 className="text-center mt-3">Please Add Some Todo</h1>
              )}
            </div>
          </div>
        </div>
        <div>
          <div
            class="content"
            className="m-auto"
            style={{ width: "700px", justifyContent: "center" }}
          >
            <div class="notebook-page">
              {doneTask.length > 0 ? (
                <div>
                  <h3
                    className="text-center p-2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "30px",
                      padding: "10px",
                      color: "#332556",
                    }}
                  >
                    {" "}
                    Donetask
                  </h3>

<div className="mt-5">
                    {doneTask.map((e, i) => {
                      return (
                        <div style={{ width: "100%" }} key={i}>
                          <div
                            className="border-bottom border-1 dark pb-2 w-100  gap-2"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ paddingRight: "20px" }}>
                              <h
                                className="dud"
                                style={{ paddingLeft: "45px" }}
                              >
                                {i + 1}.
                              </h>
                            </div>
                            <div
                              style={{
                                display: "flex",

                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <h3> {e}</h3>
                              <div className="m-2">
                                <Input
                                  type="checkbox"
                                  // onClick={() => pendingTaskHandler(i)}
                                  style={{
                                    padding: "10px",
                                    borderRadius: "50px",
                                    marginRight: "2px",
                                    border: "2px solid red",
                                  }}
                                  checked={remove.includes(i)}
                                  onChange={() => removeSelectHandler(i)}
                                />
                                <Trash
                                  color="red"
                                  onClick={() => deleteHandler(i)}
                                />
                                <Minus onClick={() => removeHandler(i)} />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <h1 className="text-center mt-3">Please Add Some Todo</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}