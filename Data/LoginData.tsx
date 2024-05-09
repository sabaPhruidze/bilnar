import {myContext} from '../App';
import {useContext} from 'react';

const LogintData = () => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {logMail, logPassword} = state;
  const REGISTERDATA = [
    {
      content: 'Mail',
      onChangeText: (Mail: string) => dispatching('LOG_MAIL', Mail),
      value: logMail,
      placeholder: 'Please write your Mail here',
    },
    {
      content: 'Password',
      onChangeText: (password: string) => dispatching('LOG_PASSWORD', password),
      value: logPassword,
      placeholder: 'Please write your password here',
    },
  ];
  return REGISTERDATA;
};

export default LogintData;
