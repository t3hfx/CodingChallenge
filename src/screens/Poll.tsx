import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {Header} from '@/components/Header';
import {
  black,
  blue100,
  gray100,
  pollBackgroundGradient,
  white,
  whitePrimary,
} from '@/constants/colors';
import {RootContainerStackParamList, Screens} from '@/navigation/constants';
import {font} from '@/utils/style';

const bgGradientLocations = [0, 1];

type Props = NativeStackScreenProps<RootContainerStackParamList, Screens.Poll>;

export const Poll: FC<Props> = ({navigation}) => {
  const leftHeaderComponent = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'close-outline'} size={28} color={whitePrimary} />
      </TouchableOpacity>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const middleHeaderComponent = (
    <View>
      <Text numberOfLines={1} style={styles.middleHeaderComponentText}>
        New Poll
      </Text>
    </View>
  );

  const rightHeaderComponent = (
    <Text style={styles.rightHeaderButtonText}>Create</Text>
  );

  return (
    <>
      <Header
        leftComponent={leftHeaderComponent}
        middleComponent={middleHeaderComponent}
        rightComponent={rightHeaderComponent}
        backgroundColor={blue100}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={pollBackgroundGradient}
          locations={bgGradientLocations}
          style={styles.backgroundGradient}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  middleHeaderComponentText: {
    color: whitePrimary,
    ...font(16, 19, '600'),
  },
  rightHeaderButtonText: {
    color: gray100,
    ...font(14, 21, '500'),
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: white,
  },
});
