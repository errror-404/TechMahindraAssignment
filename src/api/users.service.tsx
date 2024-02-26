import axios from 'axios';
import {User} from '../interfaces/User.interface';

export class UsersService {
  async get() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data as User[];
  }
}

export const usersService = new UsersService();
