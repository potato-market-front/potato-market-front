import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../core/axios";

const initialState = {
  products: [
    {
      id: "1",
      title: "Ugg",
      // image:
      //   "https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop",
      price: 120000,
      // createdAt: "2022-11-30T17:45:43.726338",
      // modifiedAt: "2022-11-30T17:45:43.726338",
    },
  ],
  error: null,
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (payload, thunkAPI) => {
    try {
      const response = await authInstance.get(`/products`);
      console.log("product get:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("get product");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (detailId, thunkAPI) => {
    try {
      const response = await authInstance.get(`/detail/${detailId}`, detailId);
      console.log("product get one:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("product get one:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (productId, thunkAPI) => {
    try {
      const response = authInstance.put(`/products/${productId}`);
      console.log("product update:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("product update:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProdut",
  async (newProduct, thunkAPI) => {
    console.log("newProduct:", newProduct);
    try {
      const response = authInstance.post(`/products`, newProduct);
      console.log("product post:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (itemId, thunkAPI) => {
    console.log("product delete:", itemId);
    try {
      await authInstance.delete(`/products/${itemId}`);
      return itemId;
    } catch (error) {
      console.log("product delete:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      console.log("product get payload:", action.payload);
      state.products = action.payload;
    },
    [createProduct.fulfilled]: (state, action) => {
      console.log("product create payload:", action.payload);
      state.products.push(action.payload);
    },
    [updateProduct.fulfilled]: (state, action) => {
      console.log("product update payload:", action.payload);
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    [deleteProduct.fulfilled]: (state, action) => {
      console.log("product delete payload:", action.payload);
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default productSlice.reducer;
