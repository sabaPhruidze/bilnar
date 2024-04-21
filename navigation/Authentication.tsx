import React from 'react';

import {AuthBG} from '../elements/AuthBG';

import {AuthView} from '../elements/AuthView';
import {Text} from 'react-native';
import {AuthButtonLogin} from '../navigationChild/AuthButton';
import {AuthButtonRegister} from '../navigationChild/AuthButton';

const Authentication = ({navigation}: {navigation: any}) => {
  return (
    <AuthBG source={require('../assets/images/registration.png')}>
      <AuthView>
        <AuthButtonLogin navigation={navigation} />
        <AuthButtonRegister navigation={navigation} />
      </AuthView>
    </AuthBG>
  );
};

export default Authentication;