import axios from 'axios';
import {Album} from '../interfaces/album.interface';

export class AlbumsService {
  async get() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    );
    return response.data as Album[];
  }
}

export const albumsService = new AlbumsService();
