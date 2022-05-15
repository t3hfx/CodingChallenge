import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {gray100, purple100, whitePrimary} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {font} from '@/utils/style';

import {CustomImage} from './CustomImage';

type Props = {
  icon: string;
  channelName: string;
  totalMembers: number | undefined;
  onlineMembers: number | undefined;
  chatImage: string | undefined;
};

export const Header: FC<Props> = ({
  icon,
  channelName,
  totalMembers,
  onlineMembers,
  chatImage,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={28} color={whitePrimary} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.channelName}>{channelName}</Text>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.underLineText}>{`${totalMembers} member`}</Text>
          <Text style={styles.underLineText}>{' · '}</Text>
          <Text style={styles.underLineText}>{`${onlineMembers} online`}</Text>
        </View>
      </View>
      <CustomImage source={chatImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width,
    backgroundColor: purple100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 25,
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 30,
  },
  channelName: {
    ...font(16, 19, '600'),
    color: whitePrimary,
  },
  underLineText: {
    ...font(12, 18, '400'),
    color: gray100,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  image: {
    marginRight: 20,
    height: 35,
    width: 35,
    borderRadius: 18,
  },
});
