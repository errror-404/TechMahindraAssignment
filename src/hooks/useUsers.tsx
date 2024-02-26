import {useState} from 'react';
import {usersService} from '../../api/users.service';
import {User} from '../interfaces/User.interface';
import {albumsService} from '../../api/albums.service';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    Promise.all([usersService.get(), albumsService.get()]).then(
      ([userData, albums]) => {
        const usersWithAlbums = userData.map(user => {
          const userAlbums = albums.filter(album => album.userId === user.id);
          return {
            ...user,
            albums: userAlbums,
          };
        });
        setUsers(usersWithAlbums);
      },
    );
  };

  return {users, getUsers};
};
