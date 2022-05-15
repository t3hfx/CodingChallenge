import React, {FC} from 'react';
import {
  ColorValue,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';

import {purple100} from '@/constants/colors';
import {statusBarHeight} from '@/constants/dimensions';

type Props = {
  backgroundColor?: ColorValue;
};

export const CustomStatusBar: FC<Props & StatusBarProps> = ({
  backgroundColor = purple100,
  ...props
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: statusBarHeight,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    left: 0,
  },
});
