import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AlbumList from '../components/AlbumList';
import {useUsers} from '../hooks/useUsers';
import AlbumHeader from '../components/AlbumHeader';

const AlbumsScreen = () => {
  const {users, getUsers} = useUsers();

  React.useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
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
