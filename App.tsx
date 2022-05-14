import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Navigation} from '@/navigation/Navigation';
import {StoreProvider} from '@/redux/provider';

StatusBar.setBarStyle('light-content');

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    </SafeAreaProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
