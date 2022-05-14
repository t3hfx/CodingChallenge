import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

import {rootReducer} from './rootReducer';

export const store = createStore(rootReducer);

// @ts-ignore typing issue with redux persist
export const persistor = persistStore(store);
