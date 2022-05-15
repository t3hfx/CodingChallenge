import {Message} from '@/types/messages';

export const saveMessage = (message: Message) => ({
  type: 'SAVE_MESSAGE' as const,
  message: message,
});

export const setCreatePollFlag = () => ({
  type: 'SET_CREATE_POLL_FLAG' as const,
});
