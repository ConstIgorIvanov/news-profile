import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '../features/newsSlice';
import userSlice from '../features/userSlice';

export const store = configureStore({
  reducer: {
    news: newsSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
