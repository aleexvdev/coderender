import { createSlice } from "@reduxjs/toolkit";

export type HeaderStyle = 1 | 2 | 3 | 4 | 5

interface WindowSlice {
  headerTerminal: boolean;
  border: boolean;
  HeaderStyle: HeaderStyle;
  watermark: boolean;
}

const initialState: WindowSlice = {
  headerTerminal: true,
  border: false,
  HeaderStyle: 1,
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
    changeHeaderStyle: (state, action) => {
      state.HeaderStyle = action.payload;
    },
    toggleWatermark: (state) => {
      state.watermark =!state.watermark;
    },
  },
});

export const { toggleHeaderTerminal, toggleBorder, changeHeaderStyle, toggleWatermark } = windowSlice.actions;
export default windowSlice.reducer;