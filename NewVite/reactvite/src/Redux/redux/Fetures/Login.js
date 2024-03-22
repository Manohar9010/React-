import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



 export  let loginApi= createAsyncThunk("loginuser",(data)=>{
         return axios({
            method:"post",
            url:"http://localhost:9999/user/signin",
            data,
         }).then((res)=>{
            console.log("first",res.data.data)
            return res.data.data
         })
    })

    const loginuserSlice= createSlice({
        name:"loginuser",
        initialState:{loginuser: {} ,pending:false,error:""},
        reducers:{
        addloginuser:(state,action)=>{

        }
        },
        extraReducers:(builder)=>{
            builder.addCase(loginApi.pending,(state,action)=>{
                 state.pending=true;
            }).addCase(loginApi.fulfilled,(state,action)=>{
                state.loginuser=action.payload
                console.log("builder.addCase  action:", action)
                
                state.pending=false;
            }).addCase(loginApi?.rejected,(state,action)=>{
                state.error=action?.error?.message,
                state.pending=false;
                console.log("actionerror==>",action?.error?.message)
            })
        }
    })

   export default loginuserSlice.reducer
  export const {addloginuser} =loginuserSlice.actions