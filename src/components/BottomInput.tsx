import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {whitePrimary} from '@/constants/colors';

import {CustomInput} from './CustomInput';

export const BottomInput: FC = ({}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={'megaphone-outline'}
        size={24}
        color={whitePrimary}
        style={styles.leftIcon}
      />
      <CustomInput containerStyle={styles.inputContainer} />
      <Icon
        name={'send-outline'}
        size={26}
        color={whitePrimary}
        style={styles.rightIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 40,
  },
  leftIcon: {
    marginTop: 9,
    marginLeft: 20,
  },
  rightIcon: {
    marginTop: 8,
    marginRight: 20,
  },
});
