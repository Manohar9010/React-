import React, { useEffect, useState } from 'react'
import './BellaLogin.css'
import { CircleUserRound, LockKeyhole, User } from 'lucide-react'
import { Button, Input } from 'reactstrap'
export default function BellalLogin() {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
      const getlogindata = () => {
        if (user.username.length > 0 && user.password.length > 0) {
          let jsondata = localStorage.getItem("bellalogin");
          let loginormar = JSON.parse(jsondata || "[]");
          localStorage.setItem("bellalogin", JSON.stringify([...loginormar, user]));
          setUser({
            username: "",
            password: "",
          });
          toggle();
        } else {
          alert("Enter UserName & Password");
        }
      };

      useEffect(()=>{
        let josndata = localStorage.getItem("bellalogin");
          let normal = JSON?.parse(josndata || "[]");
          console.log("Login details",normal)
      })
  return (
    <div className='bellaloginmain'>
        
        <div className='bellaclogon'
          style={{
            backgroundImage: "linear-gradient(#EAEDED,#EAEDED)",
            color: "darkred",
          }}
        >
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
                <CircleUserRound /> User name
              </label>
              <Input
                style={{ width: "280px", marginBottom: "30px" }}
                type="text"
                placeholder="User Name"
                value={user.username}
                onChange={(e) =>
                  setUser({ ...user, username: e?.target.value })
                }
              />
              <label htmlFor="" className="mb-2">
                <LockKeyhole /> Password
              </label>
              <Input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </div>
            <div className="d-flex justify-content-center gap-3 mt-4" style={{ margin: "0px 110px" }}>
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
              <Button
                onClick={getlogindata}
                className="w-25 "
                style={{ background: "#89CFF0" }}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </div>    
    
    
    </div>
  )
}
