import React, {useState, useContext} from 'react';
import {myContext} from '../App';
import {SwitchBG} from '../elements/SwitchBG';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import {Text} from 'react-native';

const Login = ({navigation}: {navigation: any}) => {
  const loginContext = useContext(myContext);
  const {state, dispatching} = loginContext;
  const {switchBG} = state;
  const toggleSwitch = () => dispatching('SWITCH_BG', !switchBG);
  return (
    <AuthBG
      source={
        switchBG
          ? require('../assets/images/Dark/Login.png')
          : require('../assets/images/Bright/Login.png')
      }
      resizeMode="cover">
      <SwitchBG
        trackColor={{false: '#e0d3d3', true: '#3f3e3e'}}
        thumbColor={switchBG ? '#a40000' : '#ff0000'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={switchBG}
      />
      <AuthView>
        <Text>fe</Text>
      </AuthView>
    </AuthBG>
  );
};

export default Login;
