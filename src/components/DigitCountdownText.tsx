import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

import {gray100} from '@/constants/colors';
import {font} from '@/utils/style';

type Props = {
  currentLength: number;
  maxLength: number;
};

export const DigitCountdownText: FC<Props> = ({currentLength, maxLength}) => {
  return (
    <Text
      style={styles.digitCountdownText}>{`${currentLength}/${maxLength}`}</Text>
  );
};

const styles = StyleSheet.create({
  digitCountdownText: {
    ...font(12, 18, '400'),
    color: gray100,
  },
});
