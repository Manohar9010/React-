import { createSlice } from "@reduxjs/toolkit";

let pointerslice= createSlice({
    name:"pointer",
    initialState:{pointer:250.5},
    reducers:{
       inpointers:(state,action)=>{
            state.pointer+=15.5
       }
    },
   

})

export default pointerslice.reducer
export const {inpointers}=pointerslice.actions