import { configureStore } from "@reduxjs/toolkit";
import countReduser from "../Fetures/Count";
// import amountReduser from "../Fetures/Amout";
import amountReduser from "../Fetures/Amout"
import pointerReduser from "../Fetures/Pointer"
import userSlice from"../Fetures/User"
import loginuserSlice from "../Fetures/Login"
export default configureStore({
  reducer: {
    COUNT: countReduser,
     amountReduser,
    pointerReduser,
    userSlice,
    loginuserSlice,
  },
});
