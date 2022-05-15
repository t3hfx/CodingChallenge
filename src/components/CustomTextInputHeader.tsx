import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {gray100} from '@/constants/colors';
import {font} from '@/utils/style';

type Props = {
  title: string;
  rightComponent: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const CustomTextInputHeader: FC<Props> = ({
  title,
  rightComponent,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {rightComponent && rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...font(12, 22, '500'),
    color: gray100,
  },
});
