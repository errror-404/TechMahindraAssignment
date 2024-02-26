import {useState} from 'react';
import {albumImagesService} from '../api/albumImages.service';
import {AlbumImage} from '../interfaces/album.interface';

export const useAlbum = () => {
  const [images, setImages] = useState<AlbumImage[]>([]);

  const getImages = async (albumId: number) => {
    const response = await albumImagesService.get(albumId);
    setImages(response);
  };

  return {images, getImages};
};
