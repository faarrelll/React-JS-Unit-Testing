import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import cartSlice from "./features/cartSlice";
import { authApi } from "./api/auth";
import { setupListeners } from "@reduxjs/toolkit/query";

const currentCombineReducers = combineReducers({
  counter: counterSlice,
  cart: cartSlice,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: currentCombineReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
