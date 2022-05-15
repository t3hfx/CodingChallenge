import {useState} from 'react';

export type OptionState = {
  text: string;
};

export const useOptions = () => {
  const [options, setOptions] = useState<OptionState[]>([]);
  const [optionsError, setOptionsError] = useState<boolean>(false);

  return {
    options,
    setOptions,
    optionsError,
    setOptionsError,
  };
};
