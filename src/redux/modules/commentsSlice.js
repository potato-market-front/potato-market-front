import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByProductId: {
    data: [],
    isLoading: false,
    error: null,
  },
};
export const getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/comments", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default commentsSlice.reducer;
