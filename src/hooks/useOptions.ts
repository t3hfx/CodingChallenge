import {useState} from 'react';

import {PollItem} from '@/types/messages';

export const useOptions = () => {
  const [options, setOptions] = useState<PollItem[]>([]);
  const [optionsError, setOptionsError] = useState<boolean>(false);

  return {
    options,
    setOptions,
    optionsError,
    setOptionsError,
  };
};
