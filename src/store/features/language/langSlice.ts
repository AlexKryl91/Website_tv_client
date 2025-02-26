import { TLangSet } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitState = {
  lang: TLangSet;
};

export const initialState: TInitState = {
  lang: 'ru',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<TLangSet>) {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
