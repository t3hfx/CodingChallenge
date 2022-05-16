import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {gray100, whitePrimary} from '@/constants/colors';
import {Message} from '@/types/messages';
import {font} from '@/utils/style';

import {CustomImage} from './CustomImage';

type Props = {
  isCurrentUser: boolean;
  item: Message;
};

export const ChatMessage: FC<Props> = ({isCurrentUser, item}) => {
  return (
    <View style={[styles.message, isCurrentUser && styles.currentUserMessage]}>
      {!isCurrentUser && (
        <CustomImage source={item.author.avatar} style={styles.avatar} />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.author.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      {isCurrentUser && (
        <CustomImage source={item.author.avatar} style={styles.avatar} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    marginLeft: 15,
    marginRight: 25,
    flexDirection: 'row',
    marginBottom: 15,
  },
  currentUserMessage: {
    justifyContent: 'flex-end',
    marginRight: 20,
    flexWrap: 'wrap',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  textContainer: {
    marginLeft: 15,
    marginRight: 25,
  },
  name: {
    color: gray100,
    ...font(12, 18, '600'),
  },
  messageText: {
    color: whitePrimary,
    ...font(15, 22, '400'),
  },
});
