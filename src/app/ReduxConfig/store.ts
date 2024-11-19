import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './slices/memberSlice';

export const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
