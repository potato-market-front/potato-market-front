import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isDev } from ".";

export const getCommnetsByProductId = createAsyncThunk(
  "GET_COMMENT_BY_PRODUCT_ID",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments?productId${productId}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
export const addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/comments",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    //댓글조회 by ProductId
    [getCommnetsByProductId.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [getCommnetsByProductId.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data = action.payload;
    },
    [getCommnetsByProductId.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
    //댓글달기
    [addComment.pending]: (state) => {
      state.commentsByProductId.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.commentsByProductId.isLoading = false;
      state.commentsByProductId.data.push(action.payload);
    },
    [addComment.rejected]: (state, action) => {
      state.commentsByProductId.isLoading = false;
      state.commentsByProductId.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;

/*
2. commentsSlice 선언, 이름과 initial state for comments and commentsByProductId적기
3. commentsSlice에서 comment가 null 이면 
*/
