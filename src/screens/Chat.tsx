import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BottomInput} from '@/components/BottomInput';
import {CustomStatusBar} from '@/components/CustomStatusBar';
import {Header} from '@/components/Header';
import {Messages} from '@/components/Messages';
import {blackPrimary} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {currentUser, useChat} from '@/hooks/useChat';

export const Chat: FC = () => {
  const {totalMembers, onlineMembers, messages, addMessageStructured} =
    useChat();
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
          <Messages user={currentUser} messages={messages} />
          <BottomInput addMessageStructured={addMessageStructured} />
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
