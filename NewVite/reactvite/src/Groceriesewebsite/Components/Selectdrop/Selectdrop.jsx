import React, { useEffect, useState } from "react";
import "./Selectdrop.css";
import { Input } from "reactstrap";
import { ChevronDown } from "lucide-react";

export default function Selectdrop({ categories ,placeholder}) {
  const [opendrop, setOpendrop] = useState(false);
  const [selectindex, setSelectindex] = useState(0);
  const [iteval, setItemval] = useState(placeholder);
  const [search,setSearch]=useState("")
  const [serachdata,setSearchdata]=useState(categories)
  const opendrapfun = () => {
    setOpendrop(!opendrop);
  };

  const Closedrop = (item, index) => {
    setOpendrop(false);
    setSelectindex(index);
    setItemval(item);
    setSearch("")
  };
  useEffect(()=>{ 
     const list=serachdata.filter((item)=>{
      return(
        item .toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
     })
    let list2=[...new Set(list)]
    setSearchdata(list2)
   
    if(search.length ===0){
      setSearchdata(categories)
    }
  })

  return (
    <div>
      <div className="allcategore d-flex justify-content-evenly" onClick={opendrapfun}>
        <div style={{flex:"2"}}>

        {iteval.length >14 ?iteval.substr(0,14)+"...":iteval}
        </div>
        <div>
       <ChevronDown color="#191a19" />
       </div>
      </div>
      

      {opendrop === true && (
        <div className="selectdropdown">
          <div className="searchinput">
            <div>
              <div>
                <Input type="text" onChange={(e)=>setSearch(e?.target?.value)} placeholder="Search item.." />
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
