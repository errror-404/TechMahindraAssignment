import {useState} from 'react';
import {usersService} from '../api/users.service';
import {User} from '../interfaces/User.interface';
import {RootState, actions, useAppSelector} from '../store/root.store';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const reduxAlbums = useAppSelector((state: RootState) => state.albums.albums);
  const [loading, setLoading] = useState(false);

  const fetchAlbums = async () => {
    await actions.albums.getAlbums();
  };

  const getUsers = async () => {
    fetchAlbums();

    setLoading(true);
    console.log('reduxAlbums', reduxAlbums.length);

    Promise.all([usersService.get()]).then(([userData]) => {
      const usersWithAlbums = userData.map(user => {
        const userAlbums = reduxAlbums.filter(
          album => album.userId === user.id,
        );
        return {
          ...user,
          albums: userAlbums,
        };
      });
      console.log('usersWithAlbums', reduxAlbums.length);
      setUsers(usersWithAlbums);
      setLoading(false);
    });
  };

  return {users, getUsers, loading, reduxAlbums};
};
