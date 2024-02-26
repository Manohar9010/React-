import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: { user: ["hello"] },
  reducers: {
    addtoarry: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { addtoarry } = userSlice.actions;
