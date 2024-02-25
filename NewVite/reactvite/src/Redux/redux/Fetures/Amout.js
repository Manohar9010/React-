import { createSlice } from "@reduxjs/toolkit";

let amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 300 },
  reducers: {
    oning: (state, action) => {
      state.amount += 5;
    },
    inputval: (state, action) => {
      console.log("first", action);
      state.amount += +action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("pointer/inpointers", (state, action) => {
      state.amount += 15;
    });
  },
});

export default amountSlice.reducer;
export const { oning, inputval } = amountSlice.actions;
