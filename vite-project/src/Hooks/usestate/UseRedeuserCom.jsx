import React, { useReducer, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export default function UseRedeuserCom() {
  let [valcou, setValcou] = useState({ countin: "" });
  const redeuser = (state, action) => {
    if (action.actkry == "ing" ) {
      return {
        count: state.count + +action.num,
        blank: setValcou({ countin: "" }),
      };
    } else if (action.actkry == "dec") {
      return {
        count: state.count - action.num,
        blank: setValcou({ countin: "" }),
      };
    } else if (action.actkry == "reset") {
      return { count: (state.count = 1000) };
    } else {
      return { count: state.count, alr: toast.error("Wrong Command") };
    }
  };
  const [count, dispach] = useReducer(redeuser, { count: 1000 });
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 0px" }}>
        Count: {count.count}
      </h1>
      <label>Give input Value: </label>
      <input
        type="text"
        value={valcou.countin}
        onChange={(e) =>
          setValcou({ ...valcou, countin: e?.target?.value.replace(/\D/g, "") })
        }
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        onClick={() =>
          dispach({ actkry: "ing", num: valcou.countin, go: setValcou("") })
        }
      >
        inc{" "}
      </Button>
      <Button onClick={() => dispach({ actkry: "dec", num: valcou.countin })}>
        sub{" "}
      </Button>
      <Button onClick={() => dispach({ actkry: "reset" })}>Reset </Button>
      <Button onClick={() => dispach("decff")}>worng </Button>

      <h1>{valcou.countin}</h1>
    </div>
  );
}

// import React, { useReducer } from 'react'
// import {Button} from 'reactstrap'
// export default function UseRedeuserCom() {
//     const reducer=(state,action)=>{
//          if(action=="ing"){
//                 return state + 1
//          }else if(action=="dec"){
//              return state -1
//          }else{
//             return state
//          }

//     }

//     const[number,dispach]=useReducer(reducer,1000)
//   return (
//     <div>
//         <h1>{number}</h1>
//         <Button onClick={()=>dispach("ing")}>inc</Button>
//         <Button onClick={()=>dispach("dec")}>dec</Button>
//         <Button onClick={()=>dispach("worng")}>wrong</Button>

//     </div>
//   )
// }
