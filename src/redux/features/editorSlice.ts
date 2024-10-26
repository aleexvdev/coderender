import { createSlice } from "@reduxjs/toolkit";

interface EditorSlice {
  language: string;
  theme: string;
  lineNumbers: string;
  lineStart: number;
  lineWrapping: boolean;
  tabName: string;
}

const initialState: EditorSlice = {
  language: 'javascript',
  theme: 'vsCode',
  lineNumbers: 'show',
  lineStart: 1,
  lineWrapping: true,
  tabName: "Untitled"
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLineNumbers: (state, action) => {
      state.lineNumbers = action.payload;
    },
    setLineStart: (state, action) => {
      state.lineStart = action.payload;
    },
    toggleLineWrapping: (state) => {
      state.lineWrapping =!state.lineWrapping;
    },
    setTabName: (state, action) => {
      state.tabName = action.payload;
    }
  },
});

export const { setLanguage, setTheme, setLineNumbers, setLineStart, toggleLineWrapping, setTabName } = editorSlice.actions;
export default editorSlice.reducer;