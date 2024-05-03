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
    <AuthButton mt20={false} authSize="login" onPress={pressHandler}>
      <AuthButText size="big">Login</AuthButText>
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
    <AuthButton mt20={false} authSize="Register" onPress={pressHandler}>
      <AuthButText size="big">Register</AuthButText>
    </AuthButton>
  );
};
