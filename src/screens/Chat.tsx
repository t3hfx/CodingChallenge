import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {BottomInput} from '@/components/BottomInput';
import {CustomImage} from '@/components/CustomImage';
import {CustomStatusBar} from '@/components/CustomStatusBar';
import {Header} from '@/components/Header';
import {Messages} from '@/components/Messages';
import {blackPrimary, gray100, whitePrimary} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {useChat} from '@/hooks/useChat';
import {font} from '@/utils/style';

export const Chat: FC = () => {
  const {
    totalMembers,
    onlineMembers,
    channelName,
    channelImage,
    messages,
    addMessageStructured,
  } = useChat();

  const leftHeaderComponent = (
    <Icon
      name={'close-outline'}
      size={28}
      color={whitePrimary}
      style={styles.headerIcon}
    />
  );

  const rightHeaderComponent = (
    <CustomImage source={channelImage} style={styles.headerAvatar} />
  );
  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={leftHeaderComponent}
          middleComponent={
            <MiddleHeaderComponent
              channelName={channelName}
              totalMembers={totalMembers}
              onlineMembers={onlineMembers}
            />
          }
          rightComponent={rightHeaderComponent}
        />
        <View style={styles.chatContainer}>
          <Messages messages={messages} />
          <BottomInput addMessageStructured={addMessageStructured} />
        </View>
      </SafeAreaView>
    </>
  );
};

type MiddleHeaderProps = {
  channelName: string;
  totalMembers: number;
  onlineMembers: number;
};

const MiddleHeaderComponent: FC<MiddleHeaderProps> = ({
  channelName,
  totalMembers,
  onlineMembers,
}) => (
  <View style={styles.textContainer}>
    <Text numberOfLines={1} style={styles.channelName}>
      {channelName}
    </Text>
    <View style={styles.bottomTextContainer}>
      <Text
        numberOfLines={1}
        style={styles.underLineText}>{`${totalMembers} member`}</Text>
      <Text style={styles.underLineText}>{' · '}</Text>
      <Text
        numberOfLines={1}
        style={styles.underLineText}>{`${onlineMembers} online`}</Text>
    </View>
  </View>
);

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
  channelName: {
    ...font(16, 19, '600'),
    color: whitePrimary,
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 30,
  },
  underLineText: {
    ...font(12, 18, '400'),
    color: gray100,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  headerIcon: {
    marginLeft: 5,
  },
  headerAvatar: {
    height: 35,
    width: 35,
    borderRadius: 18,
  },
});
