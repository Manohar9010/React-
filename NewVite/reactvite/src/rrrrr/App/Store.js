import { configureStore } from "@reduxjs/toolkit";
import createReduser from "../Feature/Count"
export default configureStore({
    reducer:{
        COUNT:createReduser
    }
})