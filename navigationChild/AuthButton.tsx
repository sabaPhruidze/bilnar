import {View, Text} from 'react-native';
import React from 'react';
import {AuthButton} from '../elements/AuthButton';
import {AuthButText} from '../elements/AuthButText';
export const AuthButtonLogin = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <AuthButton authSize="login" onPress={pressHandler}>
      <AuthButText>Login</AuthButText>
    </AuthButton>
  );
};

export const AuthButtonRegister = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('Register');
  };
  return (
    <AuthButton authSize="Register" onPress={pressHandler}>
      <AuthButText>Register</AuthButText>
    </AuthButton>
  );
};
