import React, {FC, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {blackPrimary, gray100, whitePrimary} from '@/constants/colors';
import {Message, User} from '@/types/messages';
import {font} from '@/utils/style';

import {CustomImage} from './CustomImage';

type Props = {
  user: User;
  messages: Message[];
};

export const Messages: FC<Props> = ({user, messages}) => {
  const renderItem = useCallback(({item}: {item: Message}) => {
    return (
      <View style={styles.message}>
        <CustomImage source={item.author.avatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.author.name}</Text>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
      </View>
    );
  }, []);

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
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  textContainer: {
    marginLeft: 15,
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
