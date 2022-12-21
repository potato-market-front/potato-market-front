import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import commentList from "../modules/replySlice";
import products from "../modules/productSlice";
import { configureStore } from '@reduxjs/toolkit';
import replyList from '../modules/ReplySlice';

const store = configureStore({
  reducer: {
    commentList,
    products,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
