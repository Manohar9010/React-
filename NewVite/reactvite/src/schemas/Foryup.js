import * as Yup from "yup"

export const signupSchema= Yup.object({
  
  email:Yup.string().email().required("Please Enter Email"),
  password:Yup.string().min(2).required("Please Fill the Password "),
  conformpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password Must Match")
  
})