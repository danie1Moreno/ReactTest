import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
const initialState={
    name:String,
    lastname:String,
    token:String,
    isLoading:Boolean,
  //pending think what is necesary to login success...
}
export const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{}
})