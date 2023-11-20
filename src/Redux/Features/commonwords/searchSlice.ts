import { createSlice } from "@reduxjs/toolkit";

interface initialProps {
  inputSearch: string | number | readonly string[] | undefined
};

const initialState: initialProps = {
  inputSearch: "",
};
export const searchSlice = createSlice({
  name: "/searchSlice",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      return { ...state, inputSearch:action.payload };
    },
  },
});

export const { handleInput } = searchSlice.actions;
export default searchSlice.reducer;
