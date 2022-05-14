import {createRef, useState} from 'react';
import {TextInput} from 'react-native';

export const useTextInput = () => {
  const [value, setValue] = useState('');
  const textInputRef = createRef<TextInput>();

  return {
    textInputRef,
    value,
    setValue,
  };
};
