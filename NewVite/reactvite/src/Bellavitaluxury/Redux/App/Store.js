import { configureStore } from "@reduxjs/toolkit";
import singupdataslice from "../Fetures/SingupSlice"
export default configureStore({
  reducer:{
    singupdataslice
  }
})