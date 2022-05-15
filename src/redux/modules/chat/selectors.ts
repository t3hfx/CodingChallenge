import {RootState} from '@/redux/rootReducer';

export const messagesSelector = (state: RootState) => state.chat.messages;

export const createPollFlagSelector = (state: RootState) =>
  state.chat.createPollFlag;
