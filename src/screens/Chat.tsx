import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CustomStatusBar} from '@/components/CustomStatusBar';
import {Header} from '@/components/Header';
import {blackPrimary, purple100, white} from '@/constants/colors';
import {RootContainerStackParamList, Screens} from '@/navigation/constants';
import {font} from '@/utils/style';

export const Chat: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootContainerStackParamList>>();
  return (
    <>
      <CustomStatusBar backgroundColor={purple100} />
      <SafeAreaView style={styles.container}>
        <Header
          icon="close-outline"
          channelName="Squad"
          totalMembers={1}
          onlineMembers={1}
          chatImage={
            'https://static.wikia.nocookie.net/warriors-shattered/images/5/57/Blueberry.temporary.jpeg/revision/latest?cb=20190412161611'
          }
        />
        <View style={styles.container}>
          <Text
            onPress={() => {
              navigation.navigate(Screens.Poll);
            }}
            style={styles.text}>
            Open poll
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blackPrimary,
  },
  text: {
    color: white,
    ...font(16, 28, '400', true),
  },
});
