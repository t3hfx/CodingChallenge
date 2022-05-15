import React, {FC, useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {purple100} from '@/constants/colors';
import {width} from '@/constants/dimensions';
import {currentUser, roomId, uuidv4} from '@/hooks/useChat';
import {useOptions} from '@/hooks/useOptions';
import {useTextInput} from '@/hooks/useTextInput';
import {saveMessage, setCreatePollFlag} from '@/redux/modules/chat/actions';
import {createPollFlagSelector} from '@/redux/modules/chat/selectors';
import {Message} from '@/types/messages';

import {CustomInput} from './CustomInput';
import {CustomTextInputHeader} from './CustomTextInputHeader';
import {DigitCountdownText} from './DigitCountdownText';
import {PollOptions} from './PollOptions';

type Props = {};

export const PollBody: FC<Props> = ({}) => {
  const {textInputRef, value, error, setError, setValue} = useTextInput();
  const {options, setOptions, optionsError, setOptionsError} = useOptions();

  const createPollFlag = useSelector(createPollFlagSelector);
  const dispatch = useDispatch();

  const resetError = () => {
    setError(false);
    setOptionsError(false);
  };

  useEffect(() => {
    if (createPollFlag) {
      dispatch(setCreatePollFlag());
      resetError();
      const everyOptionHasValues = options.every(i => i.text.length > 0);
      const noQuestions = options.length === 0;
      const questionHasValues = value.length > 0;
      const pollMessage: Message = {
        author: currentUser,
        id: uuidv4(),
        type: 'poll',
        createdAt: Date.now(),
        roomId: roomId,
        voteCount: 0,
        message: value,
        pollItems: options,
      };

      if (everyOptionHasValues && questionHasValues && !noQuestions)
        dispatch(saveMessage(pollMessage));

      if (!everyOptionHasValues || noQuestions) setOptionsError(true);

      if (!questionHasValues) setError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPollFlag]);

  const rightQuestionInputHeader = useMemo(() => {
    return <DigitCountdownText currentLength={value.length} maxLength={140} />;
  }, [value]);

  return (
    <View style={styles.container}>
      <CustomTextInputHeader
        title={'Question'}
        rightComponent={rightQuestionInputHeader}
        error={error}
        errorText={'Please, fill in the message'}
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

      <PollOptions
        options={options}
        setOptions={setOptions}
        optionsError={optionsError}
      />
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
