import {myContext} from '../App';
import {useContext} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
const RegisterData = () => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {regName, regMail, regBirthday, RegPassword} = state;
  const signUpTestFn = () => {
    auth()
      .createUserWithEmailAndPassword(regMail, RegPassword)
      .then(() => {
        Alert.alert('User created');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const REGISTERDATA = [
    {
      content: 'Name',
      onChangeText: (Name: string) => dispatching('REG_NAME', Name),
      value: regName,
      placeholder: 'Please write your Name here',
    },
    {
      content: 'Mail',
      onChangeText: (Mail: string) => dispatching('REG_MAIL', Mail),
      value: regMail,
      placeholder: 'Please write your Mail here',
    },
    {
      content: 'Password',
      onChangeText: (password: string) => dispatching('REG_PASSWORD', password),
      value: RegPassword,
      placeholder: 'Please write your password here',
    },
  ];
  return REGISTERDATA;
};

export default RegisterData;
