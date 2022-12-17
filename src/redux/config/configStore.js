import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import { isDev } from "../modules";

const store = configureStore({
  reducer: {
    comments,
  },
  devTools: isDev,
});

export default store;
