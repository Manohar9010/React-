import { Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function ToDoList() {
  const [todo, setTodo] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [donetask, setDonetask] = useState([]);
  const [selectindex,setSelectindex]=useState([])
  const [checkdata,setCheckdata]=useState([])
  const getdata = () => {
    if (todo.length > 0) {
      setAlldata([...alldata, todo]);
      setTodo("");

      localStorage.setItem("pengingpass", JSON.stringify([...alldata, todo]));
    }
  };

  const MoveData = (index) => {
    setDonetask([...donetask, alldata[index]]);
    let filterdata = alldata.filter((e, i) => i !== index);
    setAlldata(filterdata);
    localStorage.setItem(
      "passdata",
      JSON.stringify([...donetask, alldata[index]])
    );
    localStorage.setItem("pengingpass", JSON.stringify(filterdata));
   
  };
  const deletefun = (index1) => {
    let deldata = donetask.filter((e, i) => i !== index1);
    setDonetask(deldata);
    localStorage.setItem("passdata", JSON.stringify(deldata));
  };
  const Returndata = (index) => {
    setAlldata([...alldata, donetask[index]]);
    let filterdata = donetask.filter((e, i) => i !== index);
    setDonetask(filterdata);
    localStorage.setItem("passdata", JSON.stringify(filterdata));
    localStorage.setItem(
      "pengingpass",
      JSON.stringify([...alldata, donetask[index]])
    );
  };

  useEffect(() => {
    try {
      let jsondata = localStorage.getItem("passdata") || "[]";
      let jsondata1 = localStorage.getItem("pengingpass") || "[]";

      let norpengin = JSON.parse(jsondata1);
      setAlldata(norpengin);
      let normal = JSON.parse(jsondata);
      console.log(normal);
      setDonetask(normal);
    } catch (error) {
      console.error("error ");
      setDonetask([]);
    }
  }, []);

  const checkfuntion=(index)=>{
     let available=selectindex.includes(index)
     console.log("--------",available)
    if(available){
      console.log("==== avalible")
     let fillterdata= selectindex.filter((e,i)=>e!==index)
     setSelectindex(fillterdata)
  }else{

    setSelectindex([...selectindex,index])
  }
  
  }
  console.log("------",selectindex)
  const checksubmit=()=>{
        let emptydata=[]
        let filldata=[]
        alldata.map((e,i)=>{
          if(selectindex.includes(i)){
            filldata.push(e)
          }else{
            emptydata.push(e)
          }
          setAlldata(emptydata)
          setDonetask([...donetask,...filldata])
        })
  }
  return (
    <>
      <div className="">
        <div className="w-25 mx-auto mt-5 d-flex gap-5 justify-content-center">
          <Input style={{width:"500px"}}
            onChange={(e) => setTodo(e?.target?.value)}
            value={todo}
            type="text"
          />
          <Button className="btn btn-danger m-0" onClick={getdata}>
            click <Github />
          </Button>


          <Button onClick={()=>checksubmit()}>checkbutton</Button>
        </div>
        <div className="d-flex gap-5 justify-content-around mx-5">
          {/*  */}

          <div className="w-50 px-3 border border-5 rounded mx-auto mt-5">
            <h1 className="text-center">Pending List</h1>

            {alldata.map((e, i) => {
              return (
                <ul
                  key={i}
                  className="w-100 border border-5 me-4 mt-3 p-2 d-flex  justify-content-between rounded"
                >
                  <li>{e}</li>
                  <li className="d-flex gap-3">
                    {" "}
                    <Button onClick={() => MoveData(i)}>AddData</Button>
                    <Input 
                    
                    onChange={()=>checkfuntion(i)}
                     checked={selectindex.includes(i)} type="checkbox" />
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="w-50 px-3 border border-5 rounded mx-auto mt-5">
            <h1 className="text-center">Done List</h1>
            {donetask.map((e, i) => {
              return (
                <ul
                  key={i}
                  className="w-100 border border-info me-4 mt-3 p-2 d-flex  justify-content-between rounded"
                >
                  <li>{e}</li>

                  <li>
                    {" "}
                    <Button  onClick={() => Returndata(i)}>
                      Retundata
                    </Button>{" "}
                    <Button className="m-0" onClick={() => deletefun(i)}>Delete</Button>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}