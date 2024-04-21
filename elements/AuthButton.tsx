import styled from 'styled-components/native';
import {useContext} from 'react';
import {myContext} from '../App';

const context = useContext(myContext);
const {state} = context;
const {loginBtnPressed} = state;
export const AuthButton = styled.TouchableOpacity<{authSize: string}>`
  width: ${props => (props.authSize === 'login' ? '130px' : '180px')};
  height: ${() => (loginBtnPressed ? '80px' : '50px')};
  border-color: #ffffff;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  background-color: #dc0000c2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
