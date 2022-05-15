import React, {FC, useMemo, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  blue900,
  blue900opacity10,
  purple100,
  whitePrimary,
} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {useTextInput} from '@/hooks/useTextInput';
import {font} from '@/utils/style';

import {CustomInput} from './CustomInput';
import {CustomTextInputHeader} from './CustomTextInputHeader';
import {DigitCountdownText} from './DigitCountdownText';

type OptionState = {
  text: string;
};

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

export const PollOptions: FC<Props> = ({containerStyle}) => {
  const [options, setOptions] = useState<OptionState[]>([]);
  const canAddMoreOptions = options.length < 8;
  const addOption = () => {
    if (canAddMoreOptions) setOptions(options => [...options, {text: ''}]);
  };

  const rightOptionsHeaderComponent = useMemo(() => {
    return <DigitCountdownText currentLength={options.length} maxLength={8} />;
  }, [options]);

  return (
    <View style={containerStyle}>
      <CustomTextInputHeader
        title={'Options'}
        rightComponent={rightOptionsHeaderComponent}
        style={styles.optionsHeader}
      />
      {options.map((i, index) => (
        <Option
          key={index}
          index={index}
          text={i.text}
          setOptions={setOptions}
        />
      ))}
      {canAddMoreOptions && (
        <TouchableOpacity onPress={addOption} style={[styles.inputContainer]}>
          <Text style={styles.addOptionText}>Add an option</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

type OptionProps = {
  text: string;
  index: number;
  setOptions: React.Dispatch<React.SetStateAction<OptionState[]>>;
};

const Option: FC<OptionProps> = ({index, setOptions}) => {
  const {textInputRef, value, setValue} = useTextInput();
  const removeOption = () => {
    setOptions(options =>
      options.filter((_, optionIndex) => optionIndex !== index),
    );
  };
  return (
    <View>
      <CustomInput
        ref={textInputRef}
        onChangeText={text => setValue(text)}
        autoCorrect={false}
        value={value}
        placeholder={'Type your option'}
        containerStyle={styles.inputContainer}
        maxLength={30}
        multiline={false}
      />
      <TouchableOpacity onPress={removeOption} style={styles.removeOption}>
        <Icon name={'close-outline'} size={30} color={whitePrimary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsHeader: {
    marginTop: 25,
  },
  inputContainer: {
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: purple100,
    width: width - 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addOptionText: {
    color: blue900,
    ...font(15, 22, '400'),
  },
  removeOption: {
    top: 10,
    right: 0,
    backgroundColor: blue900opacity10,
    position: 'absolute',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
