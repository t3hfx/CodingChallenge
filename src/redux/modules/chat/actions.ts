import {Message} from '@/types/messages';

export const saveMessage = (message: Message) => ({
  type: 'SAVE_MESSAGE' as const,
  message: message,
});
