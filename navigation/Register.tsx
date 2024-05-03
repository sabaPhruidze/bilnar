import React, {useState, useContext} from 'react';
import {myContext} from '../App';
import SwitchForBG from '../navigationChild/SwitchForBG';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import RegForm from '../navigationChild/RegForm';

const Register = ({navigation}: {navigation: any}) => {
  const loginContext = useContext(myContext);
  const {state} = loginContext;
  const {switchBG} = state;

  return (
    <AuthBG
      source={
        switchBG
          ? require('../assets/images/Dark/Register.png')
          : require('../assets/images/Bright/Register.png')
      }
      resizeMode="cover">
      <SwitchForBG />
      <RegForm navigation={navigation} />
    </AuthBG>
  );
};

export default Register;
