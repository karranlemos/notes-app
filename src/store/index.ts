import { createStore } from 'redux';

import rootReducer from './ducks';

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
