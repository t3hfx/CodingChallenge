import React, {FC, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {purple100} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {useTextInput} from '@/hooks/useTextInput';

import {CustomInput} from './CustomInput';
import {CustomTextInputHeader} from './CustomTextInputHeader';
import {DigitCountdownText} from './DigitCountdownText';
import {PollOptions} from './PollOptions';

type Props = {};

export const PollBody: FC<Props> = ({}) => {
  const {textInputRef, value, setValue} = useTextInput();

  const rightQuestionInputHeader = useMemo(() => {
    return <DigitCountdownText currentLength={value.length} maxLength={140} />;
  }, [value]);

  return (
    <View style={styles.container}>
      <CustomTextInputHeader
        title={'Question'}
        rightComponent={rightQuestionInputHeader}
      />
      <CustomInput
        ref={textInputRef}
        onChangeText={text => setValue(text)}
        autoCorrect={false}
        value={value}
        placeholder={'Message'}
        containerStyle={styles.inputContainer}
        maxLength={140}
      />

      <PollOptions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  inputContainer: {
    marginTop: 10,
    width: width - 40,
    minHeight: 50,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: purple100,
  },
});
