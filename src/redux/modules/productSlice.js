import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../core/axios";

const initialState = {
  products: [],
  error: null,
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (payload, thunkAPI) => {
    try {
      const response = await authInstance.get(`/api/products`);
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
  async (productId, thunkAPI) => {
    try {
      const response = await authInstance.get(
        `/api/products/${productId}`,
        productId
      );
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
      const response = authInstance.put(`/api/products/${productId}`);
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
      authInstance.post(`/api/products`, newProduct);
      return newProduct;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, thunkAPI) => {
    console.log("product delete:", productId);
    try {
      await authInstance.delete(`/api/products/${productId}`);
      return productId;
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
