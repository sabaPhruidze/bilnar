import {myContext} from '../App';
import {useContext} from 'react';

const RegisterData = () => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {confirmPassword, regMail, regPassword} = state;

  const REGISTERDATA = [
    {
      content: 'Mail',
      onChangeText: (Mail: string) => dispatching('REG_MAIL', Mail),
      value: regMail,
      placeholder: 'Please write your Mail here',
    },
    {
      content: 'Password',
      onChangeText: (password: string) => dispatching('REG_PASSWORD', password),
      value: regPassword,
      placeholder: 'Please write your password here',
    },
    {
      content: 'Confirm password',
      onChangeText: (confirmPassword: string) =>
        dispatching('CONFIRM_PASSWORD', confirmPassword),
      value: confirmPassword,
      placeholder: 'Please confirm your password here',
    },
  ];
  return REGISTERDATA;
};

export default RegisterData;
