import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {purple100, white, whitePrimary} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {font} from '@/utils/style';

type Props = {
  channelName: string;
  totalMembers: number | undefined;
  onlineMembers: number | undefined;
  chatIcon: string | undefined;
};

export const Header: FC<Props> = ({
  channelName,
  totalMembers,
  onlineMembers,
  chatIcon,
}) => {
  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<RootContainerStackParamList>>();
  return (
    <View style={styles.container}>
      <Icon name="close-outline" size={18} color={whitePrimary} />
      <View style={styles.textContainer}>
        <Text style={styles.channelName}>{channelName}</Text>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.channelName}>{totalMembers}</Text>
          <Text style={styles.channelName}>*</Text>
          <Text style={styles.channelName}>onlineMembers</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width,
    backgroundColor: purple100,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: blackPrimary,
    flexDirection: 'row',
  },
  textContainer: {},
  channelName: {
    ...font(16, 19, '600'),
  },
  bottomTextContainer: {
    flexDirection: 'row',
  },
  text: {
    color: white,
    ...font(16, 28, '400', true),
  },
});
