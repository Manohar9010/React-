import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../../config";

export const getAllproduct = createAsyncThunk("feachProduct", () => {
  return axios({
    method: "get",
    // url: BE_URL + "/product/getAll",
    url:"http://localhost:9999/product/getAll",
  }).then((res) => {
    return res.data;
  });
}); 

const ProductSlice = createSlice({
  name: "product",
  initialState: { product: [], error:{}, pending: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllproduct.fulfilled, (state, action) => {
          console.log("action",action)
        // console.log("hhhh", action.payload);
        state.product = action.payload;
        console.log("state.product", state.product)
        state.pending =false;
      })
      .addCase(getAllproduct.rejected, (state, action) => {
        state.error = action.payload;
        state.pending =false;
      })
      .addCase(getAllproduct.pending, (state, action) => {
        state.pending =true;
      });
  },
});

export default ProductSlice.reducer;
export const {} = ProductSlice.actions;
