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

export const updateReply = createAsyncThunk(
  "reply/updateReply",
  async (payload, editReply, thunkAPI) => {
    console.log("아이디 값", payload);
    console.log("바뀌는 값", editReply);
    try {
      await axios.get(`http://localhost3003/replyList/${payload}`, payload);
      const response = await axios.put(
        `http://localhost:3003/replyList/`,
        editReply
      );
      console.log("update api", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("update api", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteReply = createAsyncThunk(
  "reply/deletereply",
  async (itemId, thunkAPI) => {
    console.log("id값", itemId);
    try {
      await axios.delete(`http://localhost:3003/replyList/${itemId}`);
      return itemId;
      // 삭제는 json 서버에서 response를 받지 않는다 (삭제 시키기 때문에 json 서버에서 data가 존재하지 않는다 - json 서버의 특징)
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
    [updateReply.fulfilled]: (state, action) => {
      console.log("update action.payload", action.payload);
      state.replyList = action.payload;
    },
  },
});

export default replySlice.reducer;
