import { configureStore } from '@reduxjs/toolkit';
import replyList from '../modules/ReplySlice';

const store = configureStore({
  reducer: { replyList },
});

export default store;
