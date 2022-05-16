import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {blackPrimary, whitePrimary} from '@/constants/colors';
import {useKeyboardHeight} from '@/hooks/useKeyboardHeight';
import {useTextInput} from '@/hooks/useTextInput';
import {RootContainerStackParamList, Screens} from '@/navigation/constants';

import {CustomInput} from './CustomInput';

type Props = {
  addMessageStructured: (message: string) => void;
};

export const BottomInput: FC<Props> = ({addMessageStructured}) => {
  const translateY = useKeyboardHeight();

  const {textInputRef, value, setValue} = useTextInput();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootContainerStackParamList>>();

  const noText = value === '';

  const onSendPress = () => {
    textInputRef.current?.blur();
    setValue('');
    addMessageStructured(value);
  };

  const openPoll = () => {
    navigation.navigate(Screens.Poll);
  };

  return (
    <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
      <TouchableOpacity onPress={openPoll}>
        <Icon
          name={'megaphone-outline'}
          size={24}
          color={whitePrimary}
          style={styles.leftIcon}
        />
      </TouchableOpacity>
      <CustomInput
        ref={textInputRef}
        onChangeText={text => setValue(text)}
        autoCorrect={false}
        value={value}
        placeholder={'Message'}
        containerStyle={styles.inputContainer}
      />
      <TouchableOpacity disabled={noText} onPress={onSendPress}>
        <Icon
          name={'send-outline'}
          size={26}
          color={whitePrimary}
          style={styles.rightIcon}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: blackPrimary,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 40,
  },
  leftIcon: {
    marginTop: 9,
    marginLeft: 20,
  },
  rightIcon: {
    marginTop: 8,
    marginRight: 20,
  },
});
