import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentList: {
    data: [],
    isLoading: false,
    error: null,
  },
  comment: {
    id: 1,
    content: "",
  },
  isLoading: false,
  error: null,
};
export const getComments = createAsyncThunk(
  "comment/getComments",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3001/commentList`);
      console.log("get api확인", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("get api", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getOneComment = createAsyncThunk(
  "comment/getOneComment",
  async (commentId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/commentList/${commentId}`
      );
      console.log("oneComment", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("post api", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const postComment = createAsyncThunk(
  "comment/postComment",
  async (newComment, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/commentList",
        newComment
      );
      console.log("post api확인", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("post api", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (itemId, thunkAPI) => {
    console.log("delete 시 id값:", itemId);
    try {
      await axios.delete(`http://localhost:3001/commentList/${itemId}`);
      return itemId;
    } catch (error) {
      console.log("delete api:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const commentsSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
  extraReducers: {
    // 전체 댓글 조회
    [getComments.pending]: (state) => {
      state.commentList.isLoading = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.commentList.isLoading = false;
      state.commentList.data = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.commentList.isLoading = false;
      state.commentList.error = action.payload;
    },
    // 댓글 삭제
    [deleteComment.pending]: (state) => {
      state.commentList.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.commentList.isLoading = false;
      const target = state.commentList.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByProductId.data.splice(target, 1);
    },
    [deleteComment.rejected]: (state, action) => {
      state.commentList.isLoading = false;
      state.commentList.error = action.payload;
    },

    // 댓글 수정
    // [updateComment.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [updateComment.fulfilled]: (state, action) => {
    //   const target = state.commentsByProductId.data.findIndex(
    //     (comment) => comment.id === action.payload.id
    //   );
    //   state.isLoading = false;
    //   state.commentsByProductId.data.splice(target, 1, action.payload);
    // },
    // [updateComment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // 댓글 추가
    [postComment.pending]: (state) => {
      state.commentList.isLoading = true;
    },
    [postComment.fulfilled]: (state, action) => {
      state.commentList.isLoading = false;
      state.commentList.data.push(action.payload);
    },
    [postComment.rejected]: (state, action) => {
      state.commentList.isLoading = false;
      state.commentList.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
