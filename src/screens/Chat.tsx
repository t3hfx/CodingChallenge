import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {black, white} from '@/constants/colors';
import {saveMessage} from '@/redux/modules/chat/actions';
import {messagesSelector} from '@/redux/modules/chat/selectors';

export const Chat: FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          onPress={() => {
            dispatch(saveMessage('asdasdasd'));
          }}
          style={styles.text}>
          {String(messages)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: black,
  },
  text: {
    color: white,
  },
});
