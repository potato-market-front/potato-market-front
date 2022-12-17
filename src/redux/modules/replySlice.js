import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  replyList: [
    {
      // commentid: 1,
      id: 2,
      // nickname: "닉네임2",
      content: "대댓글 내용입니다.",
      // createdAt: "2022-11-30T17:45:43.726338",
      // modifiedAt: "2022-11-30T17:45:43.726338",
    },
  ],
  error: null,
};

export const getReply = createAsyncThunk(
  "reply/getreply",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3003/replyList`);
      console.log("get api확인", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("get api", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postReply = createAsyncThunk(
  "reply/postreply",
  async (newReply, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:3003/replyList`,
        newReply
      );
      console.log("post api확인", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("post api", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteReply = createAsyncThunk(
  "reply/deletereply",
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3003/replyList/${itemId}`
      );
      console.log("delete api확인", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("delete api", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// extraReducer
export const replySlice = createSlice({
  name: "replyList",
  initialState,
  reducers: {},
  extraReducers: {
    [getReply.fulfilled]: (state, action) => {
      console.log("get action.payload", action.payload);
      state.replyList = action.payload;
    },
    [getReply.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [postReply.fulfilled]: (state, action) => {
      state.replyList.push(action.payload);
      console.log("post action.payload", action.payload);
    },
    [deleteReply.fulfilled]: (state, action) => {
      console.log("delete action.payload", action.payload);
      state.replyList = state.replyList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default replySlice.reducer;
