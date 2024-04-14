import { configureStore } from "@reduxjs/toolkit";
import singupdataslice from "../Fetures/SingupSlice"
import userpreviwSlice from"../Fetures/PreviewSlice"
import ProductSlice from"../Fetures/ProductSlice/ProductSlice"
import cartSlice from "../Fetures/CartSlice"
export default configureStore({
  reducer:{
    singupdataslice,
    userpreviwSlice,
    ProductSlice,
    cartSlice,

  }
})