import { configureStore } from "@reduxjs/toolkit";
import singupdataslice from "../Fetures/SingupSlice"
import userpreviwSlice from"../Fetures/PreviewSlice"
export default configureStore({
  reducer:{
    singupdataslice,
    userpreviwSlice,
  }
})