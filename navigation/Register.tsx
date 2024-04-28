import React, {useState, useContext} from 'react';
import {myContext} from '../App';
import SwitchForBG from '../navigationChild/SwitchForBG';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import {Text} from 'react-native';
const Register = ({navigation}: {navigation: any}) => {
  const loginContext = useContext(myContext);
  const {state, dispatching} = loginContext;
  const {switchBG} = state;
  const toggleSwitch = () => dispatching('SWITCH_BG', !switchBG);
  return (
    <AuthBG
      source={
        switchBG
          ? require('../assets/images/Dark/Register.png')
          : require('../assets/images/Bright/Register.png')
      }
      resizeMode="cover">
      <SwitchForBG />
      <AuthView>
        <Text>fe</Text>
      </AuthView>
    </AuthBG>
  );
};

export default Register;
