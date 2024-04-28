import React from 'react';
import styled from 'styled-components/native';

export const RegLogFormView = styled.View`
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const RegLogFormText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
export const RegLogFormInput = styled.TextInput`
  font-size: 16px;
  font-weight: 600;
  border: 1px solid white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  background-color: #00000063;
  color: white;
`;
