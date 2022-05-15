import {createRef, useState} from 'react';
import {TextInput} from 'react-native';

export const useTextInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const textInputRef = createRef<TextInput>();

  return {
    textInputRef,
    value,
    error,
    setError,
    setValue,
  };
};
