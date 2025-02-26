// import { configureStore } from '@reduxjs/toolkit';

// export default configureStore({
//     reducer: {}
// });

import { configureStore } from '@reduxjs/toolkit';
import langReducer from '@store/features/language/langSlice';
import modalReducer from '@/store/features/modal/modalSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      lang: langReducer,
      modal: modalReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
