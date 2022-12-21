import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commentList from '../modules/replySlice';
import products from '../modules/productSlice';

const store = configureStore({
  reducer: {
    commentList,
    products,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
