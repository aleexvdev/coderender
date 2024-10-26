import { createSlice } from "@reduxjs/toolkit";

interface WindowSlice {
  headerTerminal: boolean;
  border: boolean;
  windowControls: number;
  watermark: boolean;
}

const initialState: WindowSlice = {
  headerTerminal: true,
  border: false,
  windowControls: 1,
  watermark: false,
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleHeaderTerminal: (state) => {
      state.headerTerminal =!state.headerTerminal;
    },
    toggleBorder: (state) => {
      state.border =!state.border;
    },
    changeWindowControls: (state, action) => {
      state.windowControls = action.payload;
    },
    toggleWatermark: (state) => {
      state.watermark =!state.watermark;
    },
  },
});

export const { toggleHeaderTerminal, toggleBorder, changeWindowControls, toggleWatermark } = windowSlice.actions;
export default windowSlice.reducer;