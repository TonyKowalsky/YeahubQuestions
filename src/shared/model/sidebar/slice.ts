import { createSlice } from "@reduxjs/toolkit";

interface SideBarState {
  isOpen: boolean;
}

const initialState: SideBarState = {
  isOpen: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export const sideBarReducer = sideBarSlice.reducer;
export type { SideBarState };
