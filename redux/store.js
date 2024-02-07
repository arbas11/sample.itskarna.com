import { configureStore } from '@reduxjs/toolkit';
import globalReducers from './features/global/reducer';
import modalReducers from './features/customModal/reducer';

// import { TypedUseSelectorHook, useSelector } from 'react-redux';
export const store = configureStore({
  reducer: {
    global: globalReducers,
    modal: modalReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// // export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
