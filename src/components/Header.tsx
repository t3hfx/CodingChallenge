import React, {FC} from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';

import {purple100} from '@/constants/colors';
import {width} from '@/constants/dimensions';

type Props = {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  backgroundColor?: ColorValue;
};

export const Header: FC<Props> = ({
  leftComponent,
  middleComponent,
  rightComponent,
  backgroundColor = purple100,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.leftComponent}>{leftComponent && leftComponent}</View>
      <View>{middleComponent && middleComponent}</View>
      <View style={styles.rightComponent}>
        {rightComponent && rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftComponent: {
    width: 28,
    height: 28,
    marginLeft: 20,
  },
  rightComponent: {
    marginRight: 20,
  },
});
