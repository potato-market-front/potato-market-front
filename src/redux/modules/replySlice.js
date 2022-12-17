import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  replyList: [
    {
      id: 1,
      nickname: "닉네임2",
      content: "대댓글 내용입니다.",
      createdAt: "2022-11-30T17:45:43.726338",
      modifiedAt: "2022-11-30T17:45:43.726338",
    },
  ],
};

export const postReply = createAsyncThunk(
  "reply/postRply",
  async (payload, thunkAPI) => {
    const response = await axios.post();
  }
);
