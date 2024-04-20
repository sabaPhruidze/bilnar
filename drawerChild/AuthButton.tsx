import {View, Text} from 'react-native';
import React from 'react';
import {AuthButton} from '../elements/AuthButton';
import {AuthButText} from '../elements/AuthButText';
export const AuthButtonLogin = () => {
  return (
    <AuthButton authSize="login">
      <AuthButText>Login</AuthButText>
    </AuthButton>
  );
};

export const AuthButtonRegister = () => {
  return (
    <AuthButton authSize="Register">
      <AuthButText>Register</AuthButText>
    </AuthButton>
  );
};
