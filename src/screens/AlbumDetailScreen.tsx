import {ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MainStackParamList} from '../routes/MainRoute';
import {useAlbum} from '../hooks/useAlbum';
import AlbumImageCard from '../components/AlbumImageCard';
import AlbumDetailHeader from '../components/AlbumDetailHeader';

type Props = StackScreenProps<MainStackParamList, 'AlbumDetailScreen'>;
const AlbumDetailScreen = ({route}: Props) => {
  const {album} = route.params;
  const {getImages, images} = useAlbum();

  useEffect(() => {
    getImages(album.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!images) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <FlatList
      data={images}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <AlbumImageCard image={item.thumbnailUrl} />}
      ListHeaderComponent={
        <AlbumDetailHeader
          title={album.title}
          isFavorite={album.favorite}
          id={album.id}
        />
      }
      numColumns={3}
    />
  );
};

export default AlbumDetailScreen;
