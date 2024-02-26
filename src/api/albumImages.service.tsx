import axios from 'axios';
import {AlbumImage} from '../interfaces/album.interface';

export class AlbumImagesService {
  async get(albumId: number) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    );
    return response.data as AlbumImage[];
  }
}

export const albumImagesService = new AlbumImagesService();
