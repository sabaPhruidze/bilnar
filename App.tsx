import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Start from './drawer/Start';
import {useReducer, createContext} from 'react';

export const myContext = createContext<any>('');

interface InitialState {
  loginBtnPressed: boolean;
}
const initialState: InitialState = {
  loginBtnPressed: false,
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = {...state};
  switch (action.type) {
    case 'LOGIN_BUTTON_IS_PRESSED':
    case 'LOGIN_BUTTON_ISNOT_PRESSED':
      newState.loginBtnPressed = action.payload;
      break;
    default:
      throw new Error('Unknown action type');
  }

  return newState;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function dispatching(type: string, payload: any) {
    dispatch({
      type: type,
      payload: payload,
    });
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <NavigationContainer>
          <myContext.Provider value={{state, dispatching}}>
            <Start />
          </myContext.Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

// import firebase from 'firebase/app';

// firebase.initializeApp({
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
// });
