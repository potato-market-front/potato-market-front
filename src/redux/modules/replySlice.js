import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  replyList: [
<<<<<<< HEAD
<<<<<<< HEAD
    //useSelector로 볼 수 있는 부분
=======
>>>>>>> 4b3865d (📝Add: Reply 페이지 ui 추가 및 common component 일부 수정)
=======
    //useSelector로 볼 수 있는 부분
>>>>>>> 0f2a781 (✨Feat: replyslice 작업 중)
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
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      const response = await axios.post(`http://localhost:3003/reply`, payload);
=======
    try {
      const response = await axios.post(`http://localhost:3001/reply`, payload);
>>>>>>> 0f2a781 (✨Feat: replyslice 작업 중)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
<<<<<<< HEAD
  }
);

export const replySlice = createSlice({
  name: "replyList",
  initialState,
  reducers: {},
  extraReducers: {
    [postReply.fulfilled]: (state, action) => {
      console.log("api 통신 확인", state.action);
      state.replyList.push(action.payload);
    },
  },
});

export default replySlice.reducer;
=======
    const response = await axios.post();
  }
);
>>>>>>> 4b3865d (📝Add: Reply 페이지 ui 추가 및 common component 일부 수정)
=======
  }
);

export const replySlice = createSlice({
  name: "replyList",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default replySlice.reducer;
>>>>>>> 0f2a781 (✨Feat: replyslice 작업 중)
