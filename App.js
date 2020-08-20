import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';

import {Root} from 'native-base';
// import {ScreenOrientation} from 'expo';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './src/redux/configureStore';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import LoginScreen from './src/container/LoginScreen/loginScreen';
const store = configureStore();

const persistor = persistStore(store);


// ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
              enabled>
              <Root>
               <LoginScreen/>
              </Root>
            </KeyboardAvoidingView>
          </PersistGate>
    </ReduxProvider>
  );
}

