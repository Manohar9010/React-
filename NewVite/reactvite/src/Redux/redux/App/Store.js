import { configureStore } from "@reduxjs/toolkit";
import countReduser from "../Fetures/Count";
// import amountReduser from "../Fetures/Amout";
import amountReduser from "../Fetures/Amout"
import pointerReduser from "../Fetures/Pointer"
export default configureStore({
  reducer: {
    COUNT: countReduser,
     amountReduser,
    pointerReduser,
  },
});
