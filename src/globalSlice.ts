// slices/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { IContent } from "./utils/interfaces";

interface UIState {
  isSidebarOpen: boolean;
  content?: IContent;
}

const initialState: UIState = {
  isSidebarOpen: false,
  content: undefined,
};

const globalSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setContent(state, action) {
      state.content = action.payload;
    },
  },
});

const appReducer = globalSlice.reducer;
export const { toggleSidebar, setContent } = globalSlice.actions;
export default appReducer;
