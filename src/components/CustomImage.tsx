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
      <FastImage
        style={style}
        onLoadEnd={() => setLoading(false)}
        source={{
          uri: source,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  placeholder: {
    backgroundColor: whitePrimary,
  },
});
