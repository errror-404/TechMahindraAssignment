import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AlbumList from '../components/AlbumList';
import AlbumHeader from '../components/AlbumHeader';
import {RootState, actions, useAppSelector} from '../store/root.store';

const AlbumsScreen = () => {
  const reduxAlbums = useAppSelector((state: RootState) => state.albums.users);

  const getUsers = async () => {
    await actions.albums.getAlbums();
  };

  React.useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={reduxAlbums}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <AlbumList user={item} />}
        ListHeaderComponent={<AlbumHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AlbumsScreen;
