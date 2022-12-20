import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../core/axios";

const initialState = {
  commentList: [
    {
      id: 1,
      content: "댓글 내용입니다.",
    },
  ],
  comment: {
    id: 1,
    content: "댓글 내용입니다.",
  },
  error: null,
};

export const getComments = createAsyncThunk(
  "comment/getcomments",
  async (payload, thunkAPI) => {
    try {
      const response = await authInstance.get(`/commentList`);
      console.log("comment get api확인:", response);
      // 여기 response에 replyList도 받을 수 있게끔 해야한다.
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("comment get api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneComment = createAsyncThunk(
  "comment/getonecomment",
  async (commentid, thunkAPI) => {
    const response = await authInstance.get(`/commentList/${commentid}`);
    console.log("oneComment:", response);
    return thunkAPI.fulfillWithValue(response.data);
  }
);

export const postComment = createAsyncThunk(
  "comment/postcomment",
  async (newComment, thunkAPI) => {
    console.log(newComment);
    try {
      const response = await authInstance.post(`/commentList`, newComment);
      console.log("comment post api확인:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("comment post api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comment/updateComment",
  async (editComment, thunkAPI) => {
    console.log("comment 바뀌는 값:", editComment);
    try {
      const response = await authInstance.put(
        `/replyList/${editComment.id}`,
        editComment
      );
      console.log("comment update api:", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("comment update api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comment/deletecomment",
  async (itemId, thunkAPI) => {
    console.log("comment delete 시 id값:", itemId);
    try {
      await authInstance.delete(`/commentList/${itemId}`);
      return itemId;
      // 삭제는 json 서버에서 response를 받지 않는다 (삭제 시키기 때문에 json 서버에서 data가 존재하지 않는다 - json 서버의 특징)
    } catch (error) {
      console.log("comment delete api:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// extraReducer
export const commentSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.fulfilled]: (state, action) => {
      console.log("comment get action.payload:", action.payload);
      state.commentList = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getOneComment.fulfilled]: (state, action) => {
      console.log("oneComment action.payload:", action.payload);
      state.comment = action.payload;
    },
    [postComment.fulfilled]: (state, action) => {
      state.commentList.push(action.payload);
      console.log("comment post action.payload:", action.payload);
    },
    [deleteComment.fulfilled]: (state, action) => {
      console.log("comment delete action.payload:", action.payload);
      state.commentList = state.commentList.filter(
        (item) => item.id !== action.payload
      );
    },
    [updateComment.fulfilled]: (state, action) => {
      console.log("comment update action.payload:", action.payload);
      state.comment = action.payload;
    },
  },
});

export default commentSlice.reducer;
