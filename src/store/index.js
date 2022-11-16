import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const logger = state => next => action => {
  console.log('Action', action);
  const returnValue = next(action);
  console.log('new state: ', store.getState());
  return returnValue;
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sport', 'wishList', 'app', 'auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
export const persistor = persistStore(store);

export default store;
