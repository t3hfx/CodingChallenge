import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {gray100, red100} from '@/constants/colors';
import {font} from '@/utils/style';

type Props = {
  title: string;
  rightComponent: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  error?: boolean;
  errorText?: string;
};

export const CustomTextInputHeader: FC<Props> = ({
  title,
  rightComponent,
  style,
  error,
  errorText,
}) => {
  return (
    <>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
        {rightComponent && rightComponent}
      </View>
      {error && errorText && (
        <Text style={styles.optionsError}>{errorText}</Text>
      )}
    </>
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
  optionsError: {
    color: red100,
    ...font(13, 22, '400'),
  },
});
