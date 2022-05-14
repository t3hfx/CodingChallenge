import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {black, white} from '@/constants/colors';
import {RootContainerStackParamList, Screens} from '@/navigation/constants';
import {font} from '@/utils/style';

export const Chat: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootContainerStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          onPress={() => {
            navigation.navigate(Screens.Poll);
          }}
          style={styles.text}>
          Open poll
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: black,
  },
  text: {
    color: white,
    ...font(16, 28, '400', true),
  },
});
