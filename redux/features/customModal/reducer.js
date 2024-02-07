import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState, { ModalProperties, ModalState } from './initials';

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    hideModal: (state) => {
      return initialState;
    },
    showModal: (state, action) => {
      return { modal: action.payload };
    },
  },
});

export const modalActions = modal.actions;
export default modal.reducer;
