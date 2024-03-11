import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userpre: {},
};

const userpreviwSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    prevew: (state, { payload }) => {
      state.userpre = payload.data;
      console.log("first", state);
    },
  },
});

export default userpreviwSlice.reducer;
export const { prevew } = userpreviwSlice.actions;
