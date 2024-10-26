import { createSlice } from "@reduxjs/toolkit";

interface WindowSlice {
  headerTerminal: string;
  border: string;
  windowControls: number;
  watermark: string;
}

const initialState: WindowSlice = {
  headerTerminal: "show",
  border: "none",
  windowControls: 1,
  watermark: "show",
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleHeaderTerminal: (state) => {
      state.headerTerminal = state.headerTerminal === "show"? "hide" : "show";
    },
    setBoder: (state, action) => {
      state.border = action.payload;
    },
    changeWindowControls: (state, action) => {
      state.windowControls = action.payload;
    },
    toggleWatermark: (state) => {
      state.watermark = state.watermark === "show"? "hide" : "show";
    },
  },
});

export const { toggleHeaderTerminal, setBoder, changeWindowControls, toggleWatermark } = windowSlice.actions;
export default windowSlice.reducer;