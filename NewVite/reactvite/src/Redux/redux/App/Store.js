import { configureStore } from "@reduxjs/toolkit";
import countReduser from "../Fetures/Count";

export default configureStore({
  reducer: {
    COUNT: countReduser,
  },
});
