import {Text} from 'react-native';
import {AuthView} from '../elements/AuthView';
import {AuthBG} from '../elements/AuthBG';
import React from 'react';

const Login = () => {
  return (
    <AuthBG source={require('../assets/images/login.png')}>
      <AuthView>
        <Text>fwefw</Text>
      </AuthView>
    </AuthBG>
  );
};

export default Login;
