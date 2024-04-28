import React, {useContext} from 'react';
import {myContext} from '../App';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import {AuthButtonLogin} from '../navigationChild/AuthButton';
import {AuthButtonRegister} from '../navigationChild/AuthButton';
import SwitchForBG from '../navigationChild/SwitchForBG';
const Authentication = ({navigation}: {navigation: any}) => {
  const authContext = useContext(myContext);
  const {state, dispatching} = authContext;
  const {switchBG} = state;

  return (
    <AuthBG
      source={
        switchBG
          ? require('../assets/images/Dark/Authentication.png')
          : require('../assets/images/Bright/Authentication.png')
      }
      resizeMode="cover">
      <SwitchForBG />
      <AuthView>
        <AuthButtonLogin navigation={navigation} />
        <AuthButtonRegister navigation={navigation} />
      </AuthView>
    </AuthBG>
  );
};

export default Authentication;
