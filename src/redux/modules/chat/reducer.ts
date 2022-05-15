import {roomId, someUser, uuidv4} from '@/hooks/useChat';
import {Message} from '@/types/messages';

import {saveMessage, setCreatePollFlag, updateMessage} from './actions';

const initialState: {
  messages: Message[];
  createPollFlag: boolean;
} = {
  messages: [
    {
      author: someUser,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message: "Hey, man, please reply, we're already by your house",
    },
    {
      author: someUser,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message: 'Are u up to have some fun together?',
    },
    {
      author: someUser,
      id: uuidv4(),
      type: 'text',
      createdAt: Date.now(),
      roomId: roomId,
      message:
        'Hey, cat, how r u doin, man, we gonna go and party near the suburbs',
    },
  ],
  createPollFlag: false,
};

export const chatReducer = (
  state = initialState,
  action: ReturnType<
    typeof saveMessage | typeof setCreatePollFlag | typeof updateMessage
  >,
): typeof initialState => {
  switch (action.type) {
    case 'SAVE_MESSAGE': {
      return {
        ...state,
        messages: [action.message, ...state.messages],
      };
    }

    case 'UPDATE_MESSAGE': {
      const indexOfMessageToBeUpdated = state.messages.findIndex(
        i => i.id === action.message.id,
      );
      return {
        ...state,
        messages: [
          ...state.messages.slice(0, indexOfMessageToBeUpdated),
          action.message,
          ...state.messages.slice(indexOfMessageToBeUpdated + 1),
        ],
      };
    }

    case 'SET_CREATE_POLL_FLAG': {
      return {
        ...state,
        createPollFlag: !state.createPollFlag,
      };
    }

    default:
      return state;
  }
};
