import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RoutesProps} from '../routes/MainRoute';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

interface AlbumDetailHeaderProps {
  title: string;
}

const AlbumDetailHeader = ({title}: AlbumDetailHeaderProps) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation<RoutesProps>();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={24} color={'#121417'} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        <Icon
          name={liked ? 'heart' : 'hearto'}
          size={24}
          color={liked ? '#EA2831' : '#121417'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AlbumDetailHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: '#121417',
    fontSize: 16,
    fontWeight: '500',
  },
});
