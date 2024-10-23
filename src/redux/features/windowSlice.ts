import { createSlice } from "@reduxjs/toolkit";

interface WindowSlice {
  header: boolean;
  border: boolean;
  windowControls: number;
}

const initialState: WindowSlice = {
  header: true,
  border: false,
  windowControls: 1,
}

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    toggleHeader: (state) => {
      state.header =!state.header;
    },
    toggleBorder: (state) => {
      state.border = !state.border;
    },
    changeWindowControls: (state, action) => {
      state.windowControls = action.payload;
    },
  },
});

export const { toggleHeader, toggleBorder, changeWindowControls } = windowSlice.actions;
export default windowSlice.reducer;