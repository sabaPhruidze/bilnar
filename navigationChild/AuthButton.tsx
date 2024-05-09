import React from 'react';
import {AuthButton} from '../elements/AuthButton';
import {AuthButText} from '../elements/AuthButText';

export const AuthButtonLogin = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthButton mt20={false} authSize="login" onPress={pressHandler}>
      <AuthButText size="big">Login</AuthButText>
    </AuthButton>
  );
};

export const AuthButtonRegister = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('Register');
  };
  return (
    <AuthButton mt20={false} authSize="Register" onPress={pressHandler}>
      <AuthButText size="big">Register</AuthButText>
    </AuthButton>
  );
};
