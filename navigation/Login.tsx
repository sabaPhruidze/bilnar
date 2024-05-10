import React, {useState, useContext} from 'react';
import {myContext} from '../App';
import SwitchForBG from '../navigationChild/SwitchForBG';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import {Text} from 'react-native';
import LogForm from '../navigationChild/LogForm';
const Login = ({navigation}: {navigation: any}) => {
  const loginContext = useContext(myContext);
  const {state} = loginContext;
  const {switchBG} = state;
  // console.log(navigationName);
  return (
    <AuthBG
      source={
        switchBG
          ? require('../assets/images/Dark/Login.png')
          : require('../assets/images/Bright/Login.png')
      }
      resizeMode="cover">
      <SwitchForBG />
      <LogForm navigation={navigation} />
    </AuthBG>
  );
};

export default Login;
