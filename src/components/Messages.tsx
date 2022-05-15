import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {blackPrimary, gray100, whitePrimary} from '@/constants/colors';
import {currentUser} from '@/hooks/useChat';
import {Message} from '@/types/messages';
import {font} from '@/utils/style';

import {CustomImage} from './CustomImage';

type Props = {
  messages: Message[];
};

export const Messages: FC<Props> = ({messages}) => {
  const renderItem = ({item}: {item: Message}) => {
    const isCurrentUser = item.author.id === currentUser.id;
    return (
      <View
        style={[styles.message, isCurrentUser && styles.currentUserMessage]}>
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

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      style={styles.container}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackPrimary,
  },
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
