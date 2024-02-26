import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import AlbumsScreen from '../screens/AlbumsScreen';
import AlbumDetailScreen from '../screens/AlbumDetailScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AlbumsScreen" component={AlbumsScreen} />
      <Stack.Screen name="AlbumDetailScreen" component={AlbumDetailScreen} />
    </Stack.Navigator>
  );
};

type MainStackParamList = {
  AlbumsScreen: undefined;
  AlbumDetailScreen: {albumId: number};
};
export type RoutesProps = StackNavigationProp<MainStackParamList>;

export default MainStack;
