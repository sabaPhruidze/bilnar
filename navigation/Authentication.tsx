import React, {useState} from 'react';

import {SwitchBG} from '../elements/SwitchBG';
import {AuthBG} from '../elements/AuthBG';
import {AuthView} from '../elements/AuthView';
import {AuthButtonLogin} from '../navigationChild/AuthButton';
import {AuthButtonRegister} from '../navigationChild/AuthButton';

const Authentication = ({navigation}: {navigation: any}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <AuthBG
      source={require('../assets/images/Bright/Authentication.png')}
      resizeMode="cover">
      <SwitchBG
        trackColor={{false: '#e0d3d3', true: '#3f3e3e'}}
        thumbColor={isEnabled ? '#fc0000' : '#fc0000'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <AuthView>
        <AuthButtonLogin navigation={navigation} />
        <AuthButtonRegister navigation={navigation} />
      </AuthView>
    </AuthBG>
  );
};

export default Authentication;
