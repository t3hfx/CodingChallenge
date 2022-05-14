import {RootState} from '@/redux/rootReducer';

export const messagesSelector = (state: RootState) => state.chat.messages;
