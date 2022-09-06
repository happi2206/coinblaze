import { configureStore } from '@reduxjs/toolkit';
import coinSlice from '../features/coins/coinSlice';

export const store = configureStore({
  reducer: {
    coins: coinSlice,
  },
});
