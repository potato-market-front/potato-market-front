import { configureStore } from "@reduxjs/toolkit";
import replyList from "../modules/replySlice";

const store = configureStore({
  reducer: { replyList },
});

export default store;
