import {View, Text} from 'react-native';
import React from 'react';
import {AuthButton} from '../elements/AuthButton';
import {AuthButText} from '../elements/AuthButText';
import {myContext} from '../App';
import {useContext} from 'react';

export const AuthButtonLogin = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('Login');
  };
  const context = useContext(myContext);
  const {dispatching, state} = context;
  const {loginBtnPressed} = state;

  const handlePressIn = () => {
    dispatching('LOGIN_BUTTON_IS_PRESSED', true);
    console.log(loginBtnPressed);
  };

  const handlePressOut = () => {
    dispatching('LOGIN_BUTTON_IS_PRESSED', false);
    console.log(loginBtnPressed);
  };
  return (
    <AuthButton
      authSize="login"
      onPress={pressHandler}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <AuthButText>Login</AuthButText>
    </AuthButton>
  );
};

export const AuthButtonRegister = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('Register');
  };
  const context = useContext(myContext);
  const {state, dispaching} = context;

  return (
    <AuthButton authSize="Register" onPress={pressHandler}>
      <AuthButText>Register</AuthButText>
    </AuthButton>
  );
};
