import {saveMessage} from './actions';

const initialState: {
  messages: {} | string;
} = {
  messages: {},
};

export const chatReducer = (
  state = initialState,
  action: ReturnType<typeof saveMessage>,
): typeof initialState => {
  switch (action.type) {
    case 'SAVE_MESSAGE': {
      return {
        ...state,
        messages: action.message,
      };
    }

    default:
      return state;
  }
};
