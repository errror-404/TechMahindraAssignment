import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainRoute';

import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store/root.store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
