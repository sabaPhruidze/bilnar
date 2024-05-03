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
import RegisterData from '../Data/RegisterData';

const RegForm = ({navigation}: {navigation: any}) => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {regMail, RegPassword} = state;
  const DATA = RegisterData();
  const signUpTestFn = () => {
    auth()
      .createUserWithEmailAndPassword(regMail, RegPassword)
      .then(() => {
        Alert.alert('Hello', 'User created');
        dispatching('REG_NAME', '');
        dispatching('REG_MAIL', '');
        dispatching('REG_PASSWORD', '');
        navigation.navigate('Authentication');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
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
  );
};

export default RegForm;
