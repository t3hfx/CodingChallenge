import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BottomInput} from '@/components/BottomInput';
import {CustomStatusBar} from '@/components/CustomStatusBar';
import {Header} from '@/components/Header';
import {Messages} from '@/components/Messages';
import {blackPrimary} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {useChat} from '@/hooks/useChat';
import {RootContainerStackParamList} from '@/navigation/constants';

export const Chat: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootContainerStackParamList>>();

  const {totalMembers, onlineMembers, messages, user, handlePress} = useChat();
  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>
        <Header
          icon="close-outline"
          channelName="Squad"
          totalMembers={totalMembers}
          onlineMembers={onlineMembers}
          chatImage={
            'https://static.wikia.nocookie.net/warriors-shattered/images/5/57/Blueberry.temporary.jpeg/revision/latest?cb=20190412161611'
          }
        />
        <View style={styles.chatContainer}>
          <Messages user={user} messages={messages} />
          <BottomInput />
          {/* <Text
            onPress={() => {
              navigation.navigate(Screens.Poll);
            }}
            style={styles.text}>
            Open poll
          </Text> */}
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
  chatContainer: {
    flex: 1,
    width: width,
  },
  // text: {
  //   color: white,
  //   ...font(16, 28, '400', true),
  // },
});
