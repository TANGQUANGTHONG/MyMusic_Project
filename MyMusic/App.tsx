import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TrackPlayer from 'react-native-track-player';

import AppNavigation from './src/Components/navigations/AppNavigation';
import ProductNavigation from './src/Components/navigations/ProductNavigation';
import { persistor, store } from './src/Components/rtk/Store';

// Đảm bảo service.js tồn tại và chứa logic xử lý playback
TrackPlayer.registerPlaybackService(() => require('../MyMusic/src/Components/Service/Service'));

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ProductNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
