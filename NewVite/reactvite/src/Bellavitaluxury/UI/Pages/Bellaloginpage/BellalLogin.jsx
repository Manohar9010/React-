import React, { useEffect, useState } from "react";
import "./BellaLogin.css";
import { CircleUserRound, LockKeyhole, User } from "lucide-react";
import { Button, Input } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../../../Redux/Fetures/SingupSlice";

export default function BellalLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispach = useDispatch();
  const data=useSelector(state=>state.singupdataslice)
  const [logbutton, setLogbutton] = useState(true);
  

  const getlogindata = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        
        dispach(login(res.data));
        console.log(res.data.token);
        setLogbutton(res.data.token)
        if (res.data.data.userType == "admin") {
          navigate("/dashbord");
        }else{
          navigate("/")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  const logoutfun = () => {
    dispach(logout());
    // localStorage.clear("userType");
    setLogbutton(false);
    navigate("/");
  };
 
  useEffect(() => {
   
    if (data.token) {
      setLogbutton(true);
    } else {
      setLogbutton(false);
    }
  });

  return (
    <div className="bellaloginmain">
      <div
        className="bellaclogon"
        style={{
          backgroundImage: "linear-gradient(#EAEDED,#EAEDED)",
          color: "darkred",
        }}
      >
        <div className="homebutton">
          <Button className="bg-dark">
            <NavLink className={"text-white"} to={"/"}>
              move to home
            </NavLink>
          </Button>
        </div>
        <div className="text-dark">
          <div className=" d-flex justify-content-center mt-4">
            <div
              className="d-flex justify-content-center  bg-dark"
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            >
              <User size={80} color="#f8f6f6" strokeWidth={2.25} />
            </div>
          </div>
          <div>
            <h5 className="text-center text-dark my-3">CUSTOMER LOGIN</h5>
          </div>
          <div className="mx-auto" style={{ width: "280px" }}>
            <label htmlFor="" className="mb-2">
              <CircleUserRound /> Email
            </label>
            <Input
              style={{ width: "280px", marginBottom: "30px" }}
              type="email"
              placeholder="Enter Your Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e?.target.value })}
            />
            <label htmlFor="" className="mb-2">
              <LockKeyhole /> Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            />
          </div>
          <div
            className="d-flex justify-content-center gap-3 mt-4"
            style={{ margin: "0px 110px" }}
          >
            <div className="d-flex gap-2">
              <Input type="checkbox" />

              <label htmlFor="">Rememeber me</label>
            </div>
            <div>
              <p>
                <a className="text-decoration-none text-dark" href="">
                  ForgetPassword?
                </a>{" "}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5 mt-3">
          

            {!logbutton ? (
              <Button
                onClick={getlogindata}
                className="w-25 "
                style={{ background: "black" }}
              >
                LOGIN
              </Button>
            ) : (
              <Button
                className="w-25 "
                onClick={logoutfun}
                style={{ background: "black" }}
              >
                Log out
              </Button>
            )}
          </div>
         
        </div>
        <div className="d-flex justify-content-center">
          <div className=" border border-dark w-25 rounded d-flex justify-content-center">
            <NavLink className={"text-dark"} to={"/bellrigister"}>
              {" "}
              For Registration
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
