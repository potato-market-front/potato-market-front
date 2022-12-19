import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {
    content: "",
    id: 0,
    productId: 0,
  },
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const getComment = createAsyncThunk(
  "comment/getComment",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/commentList/${payload}`
      );
      console.log("get api확인", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("get api", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.data.content = "";
    },
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
  extraReducers: {
    [getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearComment, globalEditModeToggle } = commentSlice.actions;
export default commentSlice.reducer;
