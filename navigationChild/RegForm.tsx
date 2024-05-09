import {myContext} from '../App';
import {useContext} from 'react';
import {Alert} from 'react-native';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {LogRegView} from '../elements/LogRegView';
import {
  RegLogFormText,
  RegLogFormView,
  RegLogFormInput,
} from '../elements/RegLogFormDiv';
import {AuthBGView} from '../elements/AuthBGView';
import {AuthButton} from '../elements/AuthButton';
import {AuthButText} from '../elements/AuthButText';
import RegisterData from '../Data/RegisterData';
import LogRegAlert from './LogRegAlert';

const RegForm = ({navigation}: {navigation: any}) => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {regMail, regPassword, confirmPassword, regLogAlert} = state;
  const DATA = RegisterData();
  const signUpTestFn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(regMail)) {
      dispatching('REG_LOG_ALERT', 1);
      return; // Stop further execution
    } else if (!regPassword.trim() || regPassword !== confirmPassword) {
      dispatching('REG_LOG_ALERT', 2);
    } else if (emailRegex.test(regMail) && regPassword === confirmPassword) {
      auth()
        .createUserWithEmailAndPassword(regMail, regPassword)
        .then(() => {
          navigation.navigate('Authentication');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('Error');
    }
  };
  return (
    <AuthBGView>
      {regLogAlert === 1 || regLogAlert === 2 ? <LogRegAlert /> : ''}
      <LogRegView>
        {DATA.map((data, idx) => (
          <RegLogFormView key={idx}>
            <RegLogFormText>{data.content}</RegLogFormText>
            <RegLogFormInput
              onChangeText={data.onChangeText}
              value={data.value}
              placeholder={data.placeholder}
              placeholderTextColor="#ffffffe1"
            />
          </RegLogFormView>
        ))}
        <AuthButton mt20 authSize="register" onPress={signUpTestFn}>
          <AuthButText size="small">Register</AuthButText>
        </AuthButton>
      </LogRegView>
    </AuthBGView>
  );
};

export default RegForm;
