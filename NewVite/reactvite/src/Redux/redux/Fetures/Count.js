import { createSlice } from "@reduxjs/toolkit";

const countselecter = createSlice({
  name: "count",
  initialState: { count: 999, amount: 500, point: 10.5 },
  reducers: {
    inOne: (state, action) => {
      console.log("====>", state.count);
      state.count++;
    },
    inten: (state, action) => {
      state.count += 10;
    },
    // inamount: (state, action) => {
    //   state.amount += 20;
    // },
    // inpointer: (state, action) => {
    //   state.point += 0.5;
    // },
    // lessamoutn: (state, action) => {  
    //   state.count -= 5;
    //   state.amount -= 10;
    //   state.point -= 0.5;
    // },
  },
 
});

export default countselecter.reducer;
export const { inOne, inten, inamount, inpointer, lessamoutn } =
  countselecter.actions;
