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
  const context = useContext(myContext);
  const {RegisterPressRef} = context;

  return (
    <AuthButton authSize="Register" onPress={pressHandler}>
      <AuthButText>Register</AuthButText>
    </AuthButton>
  );
};
