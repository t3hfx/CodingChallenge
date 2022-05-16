import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {blackPrimary} from '@/constants/colors';
import {currentUser} from '@/hooks/useChat';
import {Message} from '@/types/messages';

import {ChatMessage} from './ChatMessage';
import {ChatPoll} from './ChatPoll';

type Props = {
  messages: Message[];
};

export const Messages: FC<Props> = ({messages}) => {
  const renderItem = ({item}: {item: Message}) => {
    const isCurrentUser = item.author.id === currentUser.id;
    if (item.type === 'text')
      return <ChatMessage isCurrentUser={isCurrentUser} item={item} />;
    else return <ChatPoll item={item} />;
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
});
