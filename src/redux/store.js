import { configureStore } from '@reduxjs/toolkit';
import { goodsAPI } from './goodsAPI';

export const store = configureStore({
  reducer: {
    [goodsAPI.reducerPath]: goodsAPI.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(goodsAPI.middleware),
  devTools: true,
});
