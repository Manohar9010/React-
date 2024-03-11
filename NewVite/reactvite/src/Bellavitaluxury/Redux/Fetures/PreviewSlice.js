import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userpre: {},
};

const userpreviwSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    prevew: (state, { payload }) => {
      state.userpre = payload;
        
      // console.log("first============>", payload);
      console.log("first",state.userpre)
    },
  },
});

export default userpreviwSlice.reducer;
export const { prevew } = userpreviwSlice.actions;
