import { createSlice } from "@reduxjs/toolkit";

let singupdataslice= createSlice({
    name:"singupdata",
    initialState:{user:{},token:""},
    reducers:{
        register:(state,{payload})=>{
            state.user=payload.data;
            state.token=payload.token
            localStorage.setItem("userlogin",JSON.stringify(payload.data));
            localStorage.setItem("token",JSON.stringify(payload.token))
        }
    }
})

export default singupdataslice.reducer;
export const {register}=singupdataslice.actions