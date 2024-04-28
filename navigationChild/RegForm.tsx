import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {myContext} from '../App';
import {useContext, useState} from 'react';
import {LogRegView} from '../elements/LogRegView';
import {
  RegLogFormText,
  RegLogFormView,
  RegLogFormInput,
} from '../elements/RegLogFormDiv';

import RegisterData from '../Data/RegisterData';

const RegForm = () => {
  const RegFormContext = useContext(myContext);
  const {state, dispatching} = RegFormContext;
  const {regName, regMail, regBirthday, RegPassword} = state;
  const onChangeName = (Name: string) => dispatching('REG_NAME', Name);
  const DATA = RegisterData();
  return (
    <LogRegView>
      {DATA.map((data, idx) => (
        <RegLogFormView key={idx}>
          <RegLogFormText>{data.content}</RegLogFormText>
          <RegLogFormInput
            onChangeText={data.onChangeText}
            value={data.value}
            placeholder={data.placeholder}
          />
        </RegLogFormView>
      ))}
    </LogRegView>
  );
};

export default RegForm;
