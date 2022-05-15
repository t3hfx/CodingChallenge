import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {Header} from '@/components/Header';
import {PollBody} from '@/components/PollBody';
import {
  black,
  blue100,
  blue200,
  gray100,
  pollBackgroundGradient,
  whitePrimary,
} from '@/constants/colors';
import {RootContainerStackParamList, Screens} from '@/navigation/constants';
import {setCreatePollFlag} from '@/redux/modules/chat/actions';
import {font} from '@/utils/style';

const bgGradientLocations = [0, 1];

type Props = NativeStackScreenProps<RootContainerStackParamList, Screens.Poll>;

export const Poll: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const leftHeaderComponent = (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name={'close-outline'} size={28} color={whitePrimary} />
    </TouchableOpacity>
  );

  const middleHeaderComponent = (
    <View>
      <Text numberOfLines={1} style={styles.middleHeaderComponentText}>
        New Poll
      </Text>
    </View>
  );

  const rightHeaderComponent = (
    <TouchableOpacity
      onPress={() => {
        dispatch(setCreatePollFlag());
      }}>
      <Text style={styles.rightHeaderButtonText}>Create</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAwareScrollView
      style={styles.scrollViewBackground}
      contentContainerStyle={styles.container}
      keyboardDismissMode="on-drag">
      <Header
        leftComponent={leftHeaderComponent}
        middleComponent={middleHeaderComponent}
        rightComponent={rightHeaderComponent}
        backgroundColor={blue100}
      />
      <View style={styles.container}>
        <LinearGradient
          colors={pollBackgroundGradient}
          locations={bgGradientLocations}
          style={styles.backgroundGradient}
        />
        <PollBody />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  scrollViewBackground: {
    backgroundColor: blue200,
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
});
