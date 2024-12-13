import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
import { useDispatch, useSelector } from "react-redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      loading: loadingReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
