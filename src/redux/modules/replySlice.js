import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../core/axios";

const initialState = {
  replyList: [
    {
      commentid: 1,
      id: 1,
      nickname: "닉네임2",
      content: "대댓글 내용입니다.",
      createdAt: "2022-11-30T17:45:43.726338",
      modifiedAt: "2022-11-30T17:45:43.726338",
    },
  ],
  reply: {
    commentid: 1,
    id: 1,
    nickname: "닉네임2",
    content: "대댓글 내용입니다.",
    createdAt: "2022-11-30T17:45:43.726338",
    modifiedAt: "2022-11-30T17:45:43.726338",
  },
  error: null,
};

export const getReply = createAsyncThunk(
  "reply/getreply",
  async (payload, thunkAPI) => {
    try {
      const response = await authInstance.get(`/replyList`);
      console.log("get api확인:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("get api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneReply = createAsyncThunk(
  "reply/getonereply",
  async (replyid, thunkAPI) => {
    const response = await authInstance.get(`/replyList/${replyid}`);
    console.log("oneReply:", response);
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export const postReply = createAsyncThunk(
  "reply/postreply",
  async (newReply, thunkAPI) => {
    console.log(newReply);
    try {
      const response = await authInstance.post(`/replyList`, newReply);
      console.log("post api확인:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("post api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateReply = createAsyncThunk(
  "reply/updateReply",
  async (editReply, thunkAPI) => {
    console.log("바뀌는 값:", editReply);
    try {
      const response = await authInstance.put(
        `/replyList/${editReply.id}`,
        editReply
      );
      console.log("update api:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("update api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteReply = createAsyncThunk(
  "reply/deletereply",
  async (itemId, thunkAPI) => {
    console.log("delete 시 id값:", itemId);
    try {
      await authInstance.delete(`/replyList/${itemId}`);
      return itemId;
      // 삭제는 json 서버에서 response를 받지 않는다 (삭제 시키기 때문에 json 서버에서 data가 존재하지 않는다 - json 서버의 특징)
    } catch (error) {
      console.log("delete api:", error);
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
      console.log("get action.payload:", action.payload);
      state.replyList = action.payload;
    },
    [getReply.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getOneReply.fulfilled]: (state, action) => {
      console.log("oneReply action.payload:", action.payload);
      state.reply = action.payload;
    },
    [postReply.fulfilled]: (state, action) => {
      state.replyList.push(action.payload);
      console.log("post action.payload:", action.payload);
    },
    [deleteReply.fulfilled]: (state, action) => {
      console.log("delete action.payload:", action.payload);
      state.replyList = state.replyList.filter(
        (item) => item.id !== action.payload
      );
    },
    [updateReply.fulfilled]: (state, action) => {
      console.log("update action.payload:", action.payload);
      state.reply = action.payload;
    },
  },
});

export default replySlice.reducer;
