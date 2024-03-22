import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { loginApi } from "../../redux/Fetures/Login";
import { Heading1 } from "lucide-react";

export default function LoginUser() {
  const [data, setData] = useState({});
  const [inputval,setInputval]=useState({
    // email:"admin@admin.com",
    // password:"123456"
    email:"",
    password:"",
  })
  const [alldata,setAlldata]=useState([])
  let dispach = useDispatch();
  let loginuserSlice = useSelector((state) => state.loginuserSlice);
  
  useEffect(() => {
    if(loginuserSlice.error) alert(loginuserSlice.error)
    setData(loginuserSlice.loginuser);
  }, [loginuserSlice]);

  const getdata=(e)=>{
    e.preventDefault
    // setAlldata([...alldata,inputval])
    dispach(loginApi(inputval))
  }

  return (
    <div>
      LoginUser
      {loginuserSlice.pending ? (
        <h1>Loading........!</h1>
      ) : (
        <div>
          <h3>email:{data.email}</h3>
          <div className="w-50">
                 <h6>Eamil</h6>
                 <Input type="email" onChange={(e)=>setInputval({...inputval,email:e?.target?.value})}/>
                 <h6>Password</h6>
                 <Input type="password" onChange={(e)=>setInputval({...inputval,password:e?.target?.value})} />
          </div>
          <Button onClick={getdata}>ApiCall</Button>
        </div>
      )}
    </div>
  );
}

