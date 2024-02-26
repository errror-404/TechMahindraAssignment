import {createSlice} from '@reduxjs/toolkit';
import albumsReducer from './albums.reducer';
import {UserState} from '../../interfaces/User.interface';

export const initialState: UserState = {
  users: [],
};

const albumSlice = createSlice({
  name: 'albums',
  initialState: initialState,
  reducers: albumsReducer,
});

export const {actions, reducer} = albumSlice;
