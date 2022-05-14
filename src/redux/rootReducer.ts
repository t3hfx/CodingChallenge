import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import {chatReducer} from './modules/chat/reducer';

const combinedReducer = combineReducers({
  chat: chatReducer,
});

export const rootReducer = persistReducer(
  {
    key: 'root',
    whitelist: ['chat'],
    storage: AsyncStorage,
  },
  combinedReducer,
);

export type RootState = ReturnType<typeof rootReducer>;
