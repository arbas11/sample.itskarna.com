import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initials';

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    hideModal: (state) => {
      state.modal = null;
    },
    showModal: (state, action) => {
      console.log('action payload', action.payload);
      state.modal = action.payload;
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
