import React, { useState, createContext, useContext } from "react";
import { Form, Input, Label } from "reactstrap";

// Step 1: Create context
const CheckboxContext = createContext();

export default function CheckboxTask() {
  // Step 2: Define state and update functions
  const [checkval, setCheckval] = useState({
    citizen: "",
    age: "",
  });

  // Step 3: Create context provider
  const CheckboxProvider = ({ children }) => {
    return (
      <CheckboxContext.Provider value={{ checkval, setCheckval }}>
        {children}
      </CheckboxContext.Provider>
    );
  };

  return (
    <CheckboxProvider>
      <div className="d-flex flex-column justify-content-center mt-5">
        <div className="">
          <h1>
            Are You a Citizen : {checkval.citizen === "" ? "No" : "Yes"}
          </h1>
          <h1>Are You over 21 : {checkval.age === "" ? "No" : "Yes"}</h1>
       
        </div>

        <div>
          <Form>
            <Label>Are You a Citizen :</Label>
            <CheckboxInput name="citizen" />
          </Form>
          <Form>
            <Label>Are You over 21 :</Label>
            <CheckboxInput name="age" />
          </Form>
        </div>
      </div>
    </CheckboxProvider>
  );
}

// Step 4: Create custom hook to use context
const useCheckboxContext = () => {
  return useContext(CheckboxContext);
};

// Step 5: Extract CheckboxInput component
const CheckboxInput = ({ name }) => {
  const { checkval, setCheckval } = useCheckboxContext();

  const checkfun = () => {
    setCheckval({
      ...checkval,
      [name]: checkval[name] === "" ? "Yes" : "",
    });
  };

  return (
    <Input
      type="checkbox"
      checked={checkval[name] !== ""}
      onChange={checkfun}
    />
  );
};






// import React, { useState } from "react";
// import { Form, Input, Label } from "reactstrap";

// export default function CheckboxTask() {
//     const [checkval, setCheckval] = useState({
//         citizen: "",
//         age: "",
//     });

//     const checkfun = (item, field) => {
//         let match = checkval[field] === item;
//         if (match) {
//             setCheckval({ ...checkval, [field]: "" });
//         } else {
//             setCheckval({ ...checkval, [field]: item });
//         }
//     };

//     return (
//         <div className=" d-flex flex-column justify-content-center mt-5">
//             <div className="">
//                 <h1>
//                     Are You a Citizen : {checkval.citizen === "" ? "No" : "Yes"}
//                 </h1>
//                 <h1>Are You over 21 : {checkval.age === "" ? "No" : "Yes"}</h1>
//             </div>

//             <div>
//                 <Form>
//                     <Label>Are You a Citizen :</Label>
//                     <Input
//                         type="checkbox"
//                         checked={checkval.citizen !== ""}
//                         onChange={() => checkfun("Yes", "citizen")}
//                     />
//                 </Form>
//                 <Form>
//                     <Label>Are You over 21 :</Label>
//                     <Input
//                         type="checkbox"
//                         checked={checkval.age !== ""}
//                         onChange={() => checkfun("Yes", "age")}
//                     />
//                 </Form>
//             </div>
//         </div>
//     );
// }
