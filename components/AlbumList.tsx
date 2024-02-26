import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {User} from '../interfaces/User.interface';
import Icon from 'react-native-vector-icons/AntDesign';
import AlbumCard from './AlbumCard';
import {RoutesProps} from '../routes/MainRoute';
import {useNavigation} from '@react-navigation/native';

interface AlbumListProps {
  user: User;
}

const AlbumList = ({user}: AlbumListProps) => {
  const [showAlbums, setShowAlbums] = React.useState(false);
  const navigation = useNavigation<RoutesProps>();

  const onAlbumPress = (albumId: number) => {
    navigation.navigate('AlbumDetailScreen', {albumId});
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setShowAlbums(!showAlbums)}>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.albums?.length} albums</Text>
        </View>
        <Icon name={showAlbums ? 'up' : 'down'} color="#121417" size={24} />
      </TouchableOpacity>
      {showAlbums &&
        user.albums?.map(album => (
          <TouchableOpacity
            onPress={() => onAlbumPress(album.id)}
            style={styles.albumCardStyle}>
            <AlbumCard key={album.id} album={album} />
          </TouchableOpacity>
        ))}
    </>
  );
};

export default AlbumList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#121417',
  },
  albumCardStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
