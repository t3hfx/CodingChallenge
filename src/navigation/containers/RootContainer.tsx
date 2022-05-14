import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootContainerStackParamList, Screens} from '@/navigation/constants';
import {Chat} from '@/screens/Chat';
import {Poll} from '@/screens/Poll';

const Stack = createNativeStackNavigator<RootContainerStackParamList>();
export const RootContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
      initialRouteName={Screens.Chat}>
      <Stack.Screen name={Screens.Chat} component={Chat} />
      <Stack.Screen
        name={Screens.Poll}
        component={Poll}
        options={{presentation: 'formSheet'}}
      />
    </Stack.Navigator>
  );
};
