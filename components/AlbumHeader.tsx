import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const AlbumHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search1" size={24} color="#121417" />
      </View>
      <Text style={styles.title}>Shared Photos</Text>
    </View>
  );
};

export default AlbumHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  searchBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.7,
    lineHeight: 35,
    color: '#121417',
  },
});
