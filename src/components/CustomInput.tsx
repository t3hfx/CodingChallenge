import React, {FC, useRef} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {gray100, purple200, whitePrimary} from '@/constants/colors';
import {height, width} from '@/constants/dimensions';
import {font} from '@/utils/style';

type Props = {
  containerStyle: StyleProp<ViewStyle>;
};

export const CustomInput: FC<TextInputProps & Props> = props => {
  const {containerStyle, ...restProps} = props;
  const textInput = useRef<TextInput>(null);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        textInput?.current?.focus();
      }}>
      <View style={[styles.inputContainer, containerStyle]}>
        <TextInput
          ref={textInput}
          style={[styles.textInput]}
          //   placeholder={translate('comments.placeholder')}
          placeholderTextColor={gray100}
          //   onChangeText={text => onChangeTextInput(text)}
          //   value={textInputData}
          //   selectionColor={YELLOW_START}
          //   onFocus={() => setIsTextInputModalVisible(true)}
          keyboardAppearance={'dark'}
          multiline={true}
          numberOfLines={1}
          editable
          autoCorrect={true}
          {...restProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    minHeight: 35,
    maxHeight: height * 0.5,
    borderRadius: 10,
    backgroundColor: purple200,
    width: width - 53 - 56,
    paddingVertical: 7,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  textInput: {
    flexGrow: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: whitePrimary,
    maxHeight: height * 0.5,
    ...font(15, 23, '400'),
  },
});
