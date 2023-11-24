import React, { useState, useEffect } from 'react';

export default function UseEffectmach() {
     
    const [index, setIndex] = useState(0);
  const names1 = ["madhav","vishvak","raju","shiva","raghunandan","chandrashekar","raghav"];
  const names2 = ["vishvak","raghunandan","raghav"];

  const increment = () => {
    setIndex(index+1)
    if(index > names1.length-2){
        setIndex(0)
    }
  };

  useEffect(() => {
    const currentName = names1[index];
   
    if (names2.includes(currentName)) {
      alert(`The name ${currentName} exists in both arrays!`);
    }
  }, [index, names1, names2]);





  return (
      <div style={{textAlign:"center", marginTop:"150px"}}>
        <h1>mach elements of both arrays</h1>
       <h1>{names1[index]}</h1>
        <button onClick={increment}  style={{padding:"5px 10px"}} >check mach Name</button>
    </div>
  )
}

























// import React, { useState, useEffect } from 'react';

// const YourComponent = () => {
//   const [index, setIndex] = useState(0);
//   const names1 = ["madhav","vishvak","raju","shiva","raghunandan","chandrashekar","raghav"];
//   const names2 = ["vishvak","raghunandan","raghav"];

//   const handleButtonClick = () => {
//     setIndex(index+1)
//     if(index > names1.length-2){
//         setIndex(0)
//     }
//   };

//   useEffect(() => {
//     const currentName = names1[index];
   
//     if (names2.includes(currentName)) {
//       alert(`The name ${currentName} exists in both arrays!`);
//     }
//   }, [index, names1, names2]);

//   return (
//     <div style={{textAlign:"center", marginTop:"150px"}}>
//       <h1>{names1[index]}</h1>
//       <button onClick={handleButtonClick}>Next Name</button>
//     </div>
//   );
// };

// export default YourComponent;