import {StyleSheet, Image, View, useWindowDimensions} from 'react-native';
import React from 'react';

interface AlbumImageCardProps {
  image: string;
}

const AlbumImageCard = ({image}: AlbumImageCardProps) => {
  const width = useWindowDimensions().width;
  const style = styles(width);
  return (
    <View>
      <Image source={{uri: image}} style={style.imageStyle} />
    </View>
  );
};

export default AlbumImageCard;

const styles = (width: number) =>
  StyleSheet.create({
    imageStyle: {
      width: width / 3,
      height: width / 3 - 8,
    },
  });
