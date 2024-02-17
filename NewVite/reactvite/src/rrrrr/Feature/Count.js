import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 420 },
  reducers: {
    inone: (state, action) => {
      state.count++;
    },
  },
});

export default countSlice.reducer;
export const { inone } = countSlice.actions;
