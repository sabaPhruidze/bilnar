import {View, Text} from 'react-native';
import React from 'react';
import {
  LogRegAlertDiv,
  LogRegAlertText,
  LogRegAlertDivDark,
  LogRegAlertTitle,
  LogRegAlertBtn,
  LogRegAlertBtnText,
} from '../elements/LogRegAlert';
import {myContext} from '../App';
import {useContext} from 'react';

const LogRegAlert = () => {
  const logRegAlertContext = useContext(myContext);
  const {state, dispatching} = logRegAlertContext;
  const {regLogAlert} = state;

  const onPress = () => {
    dispatching('REG_LOG_ALERT', 0);
  };
  return (
    <LogRegAlertDivDark>
      <LogRegAlertDiv>
        <LogRegAlertTitle>
          {regLogAlert === 1
            ? 'Invalid Email'
            : regLogAlert === 2
            ? 'Password incorrect'
            : ''}
        </LogRegAlertTitle>
        <LogRegAlertText>
          {' '}
          {regLogAlert === 1
            ? 'Please enter a valid email address'
            : regLogAlert === 2
            ? 'The passwords you entered do not match or is blank. Please try again.'
            : ''}{' '}
        </LogRegAlertText>
        <View style={{alignItems: 'flex-end'}}>
          <LogRegAlertBtn>
            <LogRegAlertBtnText onPress={onPress}>
              Understood
            </LogRegAlertBtnText>
          </LogRegAlertBtn>
        </View>
      </LogRegAlertDiv>
    </LogRegAlertDivDark>
  );
};

export default LogRegAlert;
