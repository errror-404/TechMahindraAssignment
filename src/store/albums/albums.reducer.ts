import {PayloadAction} from '@reduxjs/toolkit';
import {Album} from '../../interfaces/album.interface';
import {User, UserState} from '../../interfaces/User.interface';

export default {
  'albums/albumsLoaded': (state: UserState, action: PayloadAction<User[]>) => {
    state.users = action.payload;
    console.log(action.payload.length);
  },
  'albums/deleteAlbum': (state: UserState, action: PayloadAction<number>) => {
    state.users = state.users.map(user => {
      user.albums = user.albums?.filter(
        (album: Album) => album.id !== action.payload,
      );
      return user;
    });
  },
  'albums/addFavorite': (state: UserState, action: PayloadAction<{}>) => {
    state.users = state.users.map(user => {
      user.albums = user.albums?.map(album => {
        if (album.id === action.payload) {
          album.favorite = !album.favorite;
        }
        return album;
      });
      return user;
    });
  },
};
