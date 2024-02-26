import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Album} from '../interfaces/album.interface';
import Icon from 'react-native-vector-icons/AntDesign';
import {actions} from '../store/root.store';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard = ({album}: AlbumCardProps) => {
  const handleDeleteAlbum = async () => {
    await actions.albums.deleteAlbum(album.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{album.title}</Text>
      <TouchableOpacity onPress={() => handleDeleteAlbum()}>
        <Icon name="delete" color="#121417" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 24,
    color: '#121417',
    width: '80%',
  },
});
