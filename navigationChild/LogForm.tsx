import {myContext} from '../App';
import {useContext} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {LogRegView} from '../elements/LogRegView';
import {
  RegLogFormText,
  RegLogFormView,
  RegLogFormInput,
} from '../elements/RegLogFormDiv';
import {AuthButton} from '../elements/AuthButton';
import {AuthButText} from '../elements/AuthButText';
import LogintData from '../Data/LoginData';
import {AuthBGView} from '../elements/AuthBGView';
import LogRegAlert from './LogRegAlert';

const LogForm = ({navigation}: {navigation: any}) => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {logMail, logPassword, regLogAlert} = state;
  const DATA = LogintData();

  const loginWithEmailAndPass = () => {
    if (!logMail.trim() || !logPassword.trim()) {
      dispatching('REG_LOG_ALERT', 3);
      return;
    }
    auth()
      .signInWithEmailAndPassword(logMail, logPassword)
      .then(res => {
        navigation.navigate('Main');
      })
      .catch(err => {
        dispatching('REG_LOG_ALERT', 3);
      });
  };
  return (
    <AuthBGView>
      {regLogAlert === 3 ? <LogRegAlert /> : ''}
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
        <AuthButton mt20 authSize="login" onPress={loginWithEmailAndPass}>
          <AuthButText size="small">Login</AuthButText>
        </AuthButton>
      </LogRegView>
    </AuthBGView>
  );
};

export default LogForm;
