import {Dispatch} from '@reduxjs/toolkit';
import {actions} from './albums.slice';
import {dispatchable} from '../dispatchable';
import {usersService} from '../../../api/users.service';
import {albumsService} from '../../../api/albums.service';

export type Action = {
  type: string;
  payload: any;
};

export const getAlbums = dispatchable(() => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      Promise.all([usersService.get(), albumsService.get()]).then(
        ([userData, albums]) => {
          const usersWithAlbums = userData.map(user => {
            const userAlbums = albums.filter(album => album.userId === user.id);
            return {
              ...user,
              albums: userAlbums,
            };
          });
          dispatch(actions['albums/albumsLoaded'](usersWithAlbums));
          return {
            success: true,
            data: usersWithAlbums,
          };
        },
      );
    } catch (error) {
      return {
        success: false,
        data: null,
      };
    }
  };
});

export const deleteAlbum = dispatchable((id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions['albums/deleteAlbum'](id));
      console.log(id);
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});

export const addFavorite = dispatchable((id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actions['albums/addFavorite'](id));
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
      };
    }
  };
});
