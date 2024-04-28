import React, {useContext} from 'react';
import {myContext} from '../App';
import {SwitchBG} from '../elements/SwitchBG';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import {AuthButtonLogin} from '../navigationChild/AuthButton';
import {AuthButtonRegister} from '../navigationChild/AuthButton';

const Authentication = ({navigation}: {navigation: any}) => {
  const authContext = useContext(myContext);
  const {state, dispatching} = authContext;
  const {switchBG} = state;
  const toggleSwitch = () => dispatching('SWITCH_BG', !switchBG);
  return (
    <AuthBG
      source={
        switchBG
          ? require('../assets/images/Dark/Authentication.png')
          : require('../assets/images/Bright/Authentication.png')
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
        <AuthButtonLogin navigation={navigation} />
        <AuthButtonRegister navigation={navigation} />
      </AuthView>
    </AuthBG>
  );
};

export default Authentication;
