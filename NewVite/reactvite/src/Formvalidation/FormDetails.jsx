import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label, Table } from "reactstrap";
import Selectdrop from "./SelectCity";
import axios from "axios";
import Select from "react-select";

export default function FormDetails() {
  const [userdata, setUserdata] = useState({
    names: "",
    city: "",
    gender: "",
    password: "",
    confirmpass: "",
    hobbys: [],
    number: "",
    filestore: "",
  });

  const [alldata, setAlldata] = useState([]);
  const [userselect,setUserselect]=useState([])

  let gen = ["Male", "Female"];
  let hobbyy = ["cricket", "Vollyball", "Hockey"];

  const checkboxfun = (item) => {
    let match = userdata.hobbys.includes(item);
    console.log(match);
    if (match) {
      let fillterdata = userdata.hobbys.filter((e, i) => e !== item);
      setUserdata({ ...userdata, hobbys: fillterdata });
    } else {
      setUserdata({ ...userdata, hobbys: [...userdata.hobbys, item] });
    }
  };

  const getdata = (e) => {
    e.preventDefault();

    if (userdata.names.length > 0) {
        setAlldata([...alldata, userdata]);

      setUserdata({
        names: "",
        city: "",
        gender: "",
        password: "",
        confirmpass: "",
        hobbys: [],
        number: "",
        filestore: "",
      });
    } else {
      alert("enter data");
     
    }
  };
  const countrylist = [];
  const userdatalist = [];
  useEffect(() => {
    axios({
      method: "get",
      url: "http://exam.antimtechnologies.com/SelectCity.php",
    })
      .then((res) => {
    //    console.log("api",res.data.City)
       res.data.City.map((item, index) => {
        userdatalist.push(item.Name);
        // console.log(countrylist);
      });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


//   http://exam.antimtechnologies.com/SelectUser.php
//   const options =  countrylist.map((city)=>{
//     return(
//         { value:city, label: city },
//     )
//   })
    
useEffect(() => {
    axios({
      method: "get",
      url: "http://exam.antimtechnologies.com/SelectUser.php",
    })
      .then((res) => {
      console.log(res.data.Select)
      setUserselect(res?.data?.Select)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let submitHanler = () => {
    axios({
      method: "post",
      url: "http://exam.antimtechnologies.com/SignUp.php",
      data: userdata,
    })
      .then((res) => {
        alert("adddata");
       
         setGetproduct(res?.data?.Select)
      })
      .catch((error) => {
        alert(error);
      });
  };
  
  return (
    <div>
      <div>
        {userdata.names}
        {userdata.city}
        {userdata.gender}
        {userdata.hobbys}
        {userdata.password}
        {userdata.confirmpass}
        {userdata.number}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-50">
          <Form onSubmit={submitHanler}>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                id="exampleName"
                name="Name"
                placeholder="with a placeholder"
                type="text"
                value={userdata.names}
                onChange={(e) =>
                  setUserdata({ ...userdata, names: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCity">City</Label>
               <div className="w-50 ">

              <Selectdrop city ={countrylist} setUserdata={setUserdata} userdata={userdata}/>
               </div>

            </FormGroup>


         
            <FormGroup>
              <Label for="exampleGender">Gender</Label>
              {gen.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Label for="examplegender">{e}</Label>
                    <Input
                      id="examplegender"
                      name="gender"
                      type="radio"
                      value={e}
                      checked={userdata.gender === e}
                      onChange={() => setUserdata({ ...userdata, gender: e })}
                    />
                  </FormGroup>
                );
              })}
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                value={userdata.password}
                onChange={(e) =>
                  setUserdata({ ...userdata, password: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleConformPassword">ConformPassword</Label>
              <Input
                id="exampleConformPassword"
                name="password"
                placeholder="Conformpassword placeholder"
                type="password"
                value={userdata.confirmpass}
                onChange={(e) =>
                  setUserdata({ ...userdata, confirmpass: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleHobbys">Hobbys</Label>
              {hobbyy.map((e, i) => {
                return (
                  <FormGroup key={i}>
                    <Label for="exampleHobbys">{e}</Label>
                    <Input
                      id="exampleHobbys"
                      name="Hobbys"
                      type="checkbox"
                      onChange={() => checkboxfun(e)}
                      checked={userdata.hobbys.includes(e)}
                    />
                  </FormGroup>
                );
              })}
            </FormGroup>
            <FormGroup>
              <Label for="examplephonenumber">Phonenumber</Label>
              <Input
                type="number"
                id="examplephonenumber"
                name="phonenumber"
                placeholder="phonenumber placeholder"
                value={userdata.number}
                onChange={(e) =>
                  setUserdata({ ...userdata, number: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText></FormText>
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </div>
      </div>


      <div>

      <Table striped>
  <thead>
    <tr>
      <th>
        sr
      </th>
      <th>
        Name
      </th>
      <th>
        city Name
      </th>
      <th>
        gender
      </th>
      <th>
        password
      </th>
      <th>
        confirmPassword
      </th>
      <th>
        hobbys
      </th>
      <th>
        phone number
      </th>
    </tr>
  </thead>
  <tbody>

    {
        alldata.map((e,i)=>{
            return(
                <tr>
            <th scope="row">
              {i+1}
            </th>
            <td>
             {e.names}
            </td>
            <td>
            {e.city}
            </td>
            <td>
              {e.gender}
            </td>
            <td>
                {e.password}
            </td>
            <td>
                {e.confirmpass}
            </td>
            <td>
                {e.hobbys}
            </td>
            <td>
                {e.number}
            </td>
          </tr>
            )
         
        })
    }
    
  </tbody>
</Table>
      </div>




      <Table striped>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Name
      </th>
      <th>
        City
      </th>
      <th>
        Gender
      </th>
      <th>
        password
      </th>
      <th>
      Hobbies
      </th>
      <th>
      PhoneNumber
      </th>
      <th>
      CityName
      </th>
    </tr>
  </thead>
  <tbody>
    {userselect.map((e,i)=>{
        return(
            <tr>
            <th scope="row">
              {i+1}
            </th>
            <td>
              {e.Name}
            </td>
            <td>
              {e.City}
            </td>
            <td>
              {e.Gender}
            </td>
            <td>
                {e.Password}
            </td>
            <td>
                {e.Hobbies}
            </td>
            <td>
                {e.PhoneNumber}
            </td>
            <td>
            {e.CityName}

            </td>
          </tr>
        )
    })}
   
    
  </tbody>
</Table>
    </div>
  );
}
