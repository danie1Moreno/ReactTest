import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeSel: { select: true, order: "order-first" },
  link1Sel: { select: false, order: "order-uno" },
  link2Sel: { select: false, order: "order-dos" },
  link3Sel: { select: false, order: "order-tres" },
  link4Sel: { select: false, order: "order-cuatro" },
  link5Sel: { select: false, order: "order-cinco" },
  open: false,
};
export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    buttonNavSel: (state, action) => {
      switch (action.payload) {
        case "homeSel":
          return {
            ...state,
            homeSel: { select: true, order: "order-first" },
            link1Sel: { select: false, order: "order-uno" },
            link2Sel: { select: false, order: "order-dos" },
            link3Sel: { select: false, order: "order-tres" },
            link4Sel: { select: false, order: "order-cuatro" },
            link5Sel: { select: false, order: "order-cinco" },
          };
          break;
        case "link1Sel":
          return {
            ...state,
            homeSel: { select: false, order: "order-first" },
            link1Sel: { select: true, order: "order-uno" },
            link2Sel: { select: false, order: "order-dos" },
            link3Sel: { select: false, order: "order-tres" },
            link4Sel: { select: false, order: "order-cuatro" },
            link5Sel: { select: false, order: "order-cinco" },
          };
          break;
        case "link2Sel":
          return {
            ...state,
            homeSel: { select: false, order: "order-first" },
            link1Sel: { select: false, order: "order-dos" },
            link2Sel: { select: true, order: "order-uno" },
            link3Sel: { select: false, order: "order-tres" },
            link4Sel: { select: false, order: "order-cuatro" },
            link5Sel: { select: false, order: "order-cinco" },
          };
          break;
        case "link3Sel":
          return {
            ...state,
            homeSel: { select: false, order: "order-first" },
            link1Sel: { select: false, order: "order-dos" },
            link2Sel: { select: false, order: "order-tres" },
            link3Sel: { select: true, order: "order-uno" },
            link4Sel: { select: false, order: "order-cuatro" },
            link5Sel: { select: false, order: "order-cinco" },
          };
          break;
        case "link4Sel":
          return {
            ...state,
            homeSel: { select: false, order: "order-first" },
            link1Sel: { select: false, order: "order-dos" },
            link2Sel: { select: false, order: "order-tres" },
            link3Sel: { select: false, order: "order-cuatro" },
            link4Sel: { select: true, order: "order-uno" },
            link5Sel: { select: false, order: "order-cinco" },
          };
          break;
        case "link5Sel":
          return {
            ...state,
            homeSel: { select: false, order: "order-first" },
            link1Sel: { select: false, order: "order-dos" },
            link2Sel: { select: false, order: "order-tres" },
            link3Sel: { select: false, order: "order-cuatro" },
            link4Sel: { select: false, order: "order-cinco" },
            link5Sel: { select: true, order: "order-uno" },
          };
          break;
        default:
          return { ...state };
          break;
      }
    },
    menuOpen: (state, action) => {
      return { ...state, open: true };
    },
    menuClose: (state, action) => {
      return { ...state, open: true };
    },
  },
});

export const { buttonNavSel, menuOpen, menuClose } = navbarSlice.actions;
export default navbarSlice.reducer;
