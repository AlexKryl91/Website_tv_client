import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: false,
  componentName: '',
  componentProps: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload.componentName;
      state.componentProps = action.payload.componentProps || {};
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.componentName = '';
      state.componentProps = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
