import {configureStore} from '@reduxjs/toolkit';
import {albumActions, albumReducer} from './albums';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const actions = {
  albums: albumActions,
};

const reducers = {
  albums: albumReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
