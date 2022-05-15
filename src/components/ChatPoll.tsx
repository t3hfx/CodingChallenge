import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {chatPollGradient, purple400, whitePrimary} from '@/constants/colors';
import {currentUser} from '@/hooks/useChat';
import {updateMessage} from '@/redux/modules/chat/actions';
import {Message} from '@/types/messages';
import {font} from '@/utils/style';

import {CustomImage} from './CustomImage';
//Somehow this import is autodeleting, tho it's used
// eslint-disable-next-line unused-imports/no-unused-imports-ts
import {PollItemClickable} from './PollItemClickable';

type Props = {
  item: Message;
};

//I don't know why this component isn't correctly parsed by eslint and showing unused vars errors

const bgGradientLocations = [0, 1];

export const ChatPoll: FC<Props> = ({item}) => {
  const dispatch = useDispatch();

  const hasIVoted = item.pollItems?.some(i =>
    i.voteIds.includes(currentUser.id),
  );

  const onPollItemPress = (id: number) => {
    if (!item.pollItems) return;
    const indexOfPollItem = item.pollItems?.findIndex(i => i.id === id);
    // console.log(indexOfPollItem);
    const pollMessage: Message = {
      ...item,
      voteCount: (item.voteCount as number) + 1,
      pollItems: [
        ...item.pollItems.slice(0, indexOfPollItem),
        {
          ...item.pollItems[indexOfPollItem],
          voteCount: item.pollItems[indexOfPollItem].voteCount + 1,
          voteIds: [...item.pollItems[indexOfPollItem].voteIds, currentUser.id],
        },
        ...item.pollItems.slice(indexOfPollItem + 1),
      ],
    };
    dispatch(updateMessage(pollMessage));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={chatPollGradient}
        locations={bgGradientLocations}
        style={styles.backgroundGradient}
      />
      <View style={styles.marginHorizontal}>
        <View style={styles.upperContainer}>
          <CustomImage source={item.author.avatar} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.publicPoll}>Public poll</Text>
            <Text style={styles.authorName}>{item.author.name}</Text>
          </View>
        </View>
        <View style={styles.voteCount}>
          <Text style={styles.voteCountText}>{item.voteCount}</Text>
          <Text style={styles.voteText}>votes</Text>
        </View>
        <View style={styles.headerMessage}>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
        {item.pollItems?.map((i, index) => (
          <PollItemClickable
            key={index}
            title={i.text}
            disabled={hasIVoted}
            voted={i.voteIds.includes(currentUser.id)}
            onPress={() => {
              onPollItemPress(i.id);
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderRadius: 13,
    marginBottom: 35,
  },
  marginHorizontal: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 13,
  },
  upperContainer: {
    marginTop: 19,
    flexDirection: 'row',
    marginRight: 70,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 13,
  },
  textContainer: {
    marginLeft: 10,
  },
  publicPoll: {
    ...font(10, 16, '400'),
    color: whitePrimary,
  },
  authorName: {
    ...font(12, 18, '600'),
    color: whitePrimary,
  },
  voteCount: {
    position: 'absolute',
    right: 0,
    top: 12,
    height: 50,
    width: 50,
    backgroundColor: purple400,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voteCountText: {
    ...font(16, 18, '600'),
    color: whitePrimary,
  },
  voteText: {
    ...font(10, 10, '400'),
    color: whitePrimary,
  },
  headerMessage: {
    marginTop: 20,
  },
  messageText: {
    ...font(15, 22, '500'),
    color: whitePrimary,
  },
});
