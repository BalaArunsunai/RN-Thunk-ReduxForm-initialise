import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import rootReducer from './reducer';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   whitelist: ['incessant'], // incessant will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(
  initialState,
  queueReleaseThrottle = 1000,
) {
  if (process.env.NODE_ENV === 'development') {
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default;
    const logger = require('redux-logger').default;

    const composeEnchancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
      persistedReducer,
      initialState,
      composeEnchancers(
        applyMiddleware(thunk, reduxImmutableStateInvariant(), logger),
      ),
    );
  }else{
    console.log = () => {}; 
    const composeEnchancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
      persistedReducer,
      initialState,
      composeEnchancers(
        applyMiddleware(thunk),
      ),
    );
  }
}