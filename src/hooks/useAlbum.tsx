import {useState} from 'react';
import {albumImagesService} from '../api/albumImages.service';
import {AlbumImage} from '../interfaces/album.interface';

export const useAlbum = () => {
  const [images, setImages] = useState<AlbumImage[]>([]);
  const [loading, setLoading] = useState(false);
  const getImages = async (albumId: number) => {
    try {
      setLoading(true);
      const response = await albumImagesService.get(albumId);
      setImages(response);
      setLoading(false);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return {images, getImages, loading};
};
