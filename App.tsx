import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Start from './drawer/Start';
import {useReducer, createContext} from 'react';

export const myContext = createContext<any>('');

interface InitialState {
  switchBG: boolean;
  switchBGRED: boolean;
  regMail: string;
  regPassword: string;
  confirmPassword: string;
  logMail: string;
  logPassword: string;
  regLogAlert: number;
}
const initialState: InitialState = {
  switchBG: false,
  switchBGRED: false,
  regMail: '',
  regPassword: '',
  confirmPassword: '',
  logMail: '',
  logPassword: '',
  regLogAlert: 0,
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = {...state};
  switch (action.type) {
    case 'SWITCH_BG':
      newState.switchBG = action.payload;
      break;
    case 'SWITCH_BG_RED':
      newState.switchBGRED = action.payload;
      break;
    case 'REG_MAIL':
      newState.regMail = action.payload;
      break;
    case 'REG_PASSWORD':
      newState.regPassword = action.payload;
      break;
    case 'CONFIRM_PASSWORD':
      newState.confirmPassword = action.payload;
      break;
    case 'LOG_MAIL':
      newState.logMail = action.payload;
      break;
    case 'LOG_PASSWORD':
      newState.logPassword = action.payload;
      break;
    case 'REG_LOG_ALERT':
      newState.regLogAlert = action.payload;
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
        <StatusBar
          backgroundColor={
            state.switchBG === false && state.switchBGRED === false
              ? '#eee'
              : state.switchBG === true && state.switchBGRED === false
              ? '#0f0f0f'
              : state.switchBGRED === true
              ? '#d60202'
              : '#4cbe00'
          }
          barStyle={state.switchBG === false ? 'dark-content' : 'light-content'}
        />
        <NavigationContainer>
          <myContext.Provider value={{state, dispatching}}>
            <Start />
            {/* saba */}
          </myContext.Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
