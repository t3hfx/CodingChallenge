import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {RootContainer} from './containers/RootContainer';

export const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <RootContainer />
    </NavigationContainer>
  );
};
