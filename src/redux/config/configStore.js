import { configureStore } from "@reduxjs/toolkit";
import replyList from "../modules/replySlice";
import commentList from "../modules/commentSlice";

const store = configureStore({
  reducer: { commentList, replyList },
});

export default store;
