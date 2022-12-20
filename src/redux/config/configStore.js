import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import replyList from "../modules/replySlice";
import products from "../modules/productSlice";

const store = configureStore({
  reducer: {
    replyList,
    products,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
