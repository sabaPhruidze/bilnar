import {myContext} from '../App';
import {useContext} from 'react';

const RegisterData = () => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {regName, regMail, regBirthday, RegPassword} = state;

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
  ];
  return REGISTERDATA;
};

export default RegisterData;
