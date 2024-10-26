import { createSlice } from "@reduxjs/toolkit";

interface WindowSlice {
  headerTerminal: boolean;
  border: string;
  windowControls: number;
  watermark: boolean;
}

const initialState: WindowSlice = {
  headerTerminal: true,
  border: "none",
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
    setBoder: (state, action) => {
      state.border = action.payload;
    },
    changeWindowControls: (state, action) => {
      state.windowControls = action.payload;
    },
    toggleWatermark: (state) => {
      state.watermark =!state.watermark;
    },
  },
});

export const { toggleHeaderTerminal, setBoder, changeWindowControls, toggleWatermark } = windowSlice.actions;
export default windowSlice.reducer;