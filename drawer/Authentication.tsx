import React from 'react';
import {AuthBG} from '../elements/AuthBG';
import {AuthButton} from '../elements/AuthButton';
import {AuthView} from '../elements/AuthView';
import {Text} from 'react-native';
import {AuthButtonLogin} from '../drawerChild/AuthButton';
import {AuthButtonRegister} from '../drawerChild/AuthButton';
const Authentication = () => {
  return (
    <AuthBG source={require('../assets/images/registration.png')}>
      <AuthView>
        <AuthButtonLogin />
        <AuthButtonRegister />
      </AuthView>
    </AuthBG>
  );
};

export default Authentication;
