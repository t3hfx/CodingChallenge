import {roomId, someUser, uuidv4} from '@/hooks/useChat';
import {Message} from '@/types/messages';

import {saveMessage} from './actions';

const initialState: {
  messages: Message[];
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
};

export const chatReducer = (
  state = initialState,
  action: ReturnType<typeof saveMessage>,
): typeof initialState => {
  switch (action.type) {
    case 'SAVE_MESSAGE': {
      return {
        ...state,
        messages: [action.message, ...state.messages],
      };
    }

    default:
      return state;
  }
};
