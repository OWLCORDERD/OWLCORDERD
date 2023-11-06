import { configureStore } from '@reduxjs/toolkit';
import nextIndexReducer from 'reducer/nextIndex';

export const store = configureStore({
  reducer: {
    counter: nextIndexReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
