import { configureStore } from "@reduxjs/toolkit";
import reply from "../modules/replySlice";

const store = configureStore({
  reducer: { reply },
});

export default store;
