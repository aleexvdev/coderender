import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ExportFormat = 'png' | 'svg' | 'jpeg';
export type ExportScale = '1' | '2' | '3';

interface ExportState {
  format: ExportFormat;
  scale: ExportScale;
  width: number;
  height: number;
}

const initialState: ExportState = {
  format: 'png',
  scale: '1',
  width: 550,
  height: 600,
};

const exportSlice = createSlice({
  name: 'export',
  initialState,
  reducers: {
    setExportFormat: (state, action: PayloadAction<ExportFormat>) => {
      state.format = action.payload;
    },
    setExportScale: (state, action: PayloadAction<ExportScale>) => {
      state.scale = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
  },
});

export const { setExportFormat, setExportScale, setWidth } = exportSlice.actions;
export default exportSlice.reducer;