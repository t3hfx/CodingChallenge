import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {blue900opacity15, whitePrimary} from '@/constants/colors';
import {font} from '@/utils/style';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

export const PollItemClickable: FC<Props> = ({title, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 40,
    borderRadius: 15,
    backgroundColor: blue900opacity15,
    paddingVertical: 11,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    ...font(12, 18, '400'),
    color: whitePrimary,
  },
});
