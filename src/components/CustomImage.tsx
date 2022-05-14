import React, {FC, useState} from 'react';
import {ActivityIndicator, StyleProp, StyleSheet, View} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';

import {whitePrimary} from '@/constants/colors';

type Props = {
  source: string | undefined;
  style?: StyleProp<ImageStyle>;
};

export const CustomImage: FC<Props> = ({source, style}) => {
  const [loading, setLoading] = useState(true);

  if (!source) return <View style={[style, styles.placeholder]} />;

  return (
    <View style={style}>
      {loading && <ActivityIndicator />}
      <FastImage
        style={style}
        onLoadEnd={() => setLoading(false)}
        source={{
          uri: source,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: whitePrimary,
  },
});
