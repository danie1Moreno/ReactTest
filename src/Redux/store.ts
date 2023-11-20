import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./Features/navbarSlice";
import searchSlice from './Features/commonwords/searchSlice'

export const store = configureStore({ reducer: {navbarSlice,searchSlice} });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
 