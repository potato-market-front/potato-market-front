import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/commentSlice";
import commentList from "../modules/commentsSlice";
import { isDev } from "../modules";

const store = configureStore({
  reducer: {
    comment,
    commentList,
  },
  devTools: isDev,
});

export default store;
