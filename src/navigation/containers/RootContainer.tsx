import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootContainerStackParamList, Screens} from '@/navigation/constants';
import {Chat} from '@/screens/Chat';

const Stack = createNativeStackNavigator<RootContainerStackParamList>();
export const RootContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
      initialRouteName={Screens.Chat}>
      <Stack.Screen
        name={Screens.Chat}
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Poll}
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
