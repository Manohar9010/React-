import { createSlice } from "@reduxjs/toolkit";
  const user=JSON.parse(localStorage.getItem("userlogin") || "{}")

  const jsontoken=localStorage.getItem("token")
  const token =jsontoken ? JSON.parse(jsontoken) : ""
let singupdataslice= createSlice({
    name:"singupdata",
    initialState:{user,token},
    reducers:{
        login:(state,{payload})=>{
            state.user=payload.data;
            state.token=payload.token;
            
            localStorage.setItem("userlogin",JSON.stringify(payload.data));
            localStorage.setItem("token",JSON.stringify(payload.token))
        },
        logout:(state,action)=>{

            console.log("====>")
            state.user={}
            state.token=""
            localStorage.clear();
        },
       

    }
})

export default singupdataslice.reducer;
export const {login,logout,prevew}=singupdataslice.actions