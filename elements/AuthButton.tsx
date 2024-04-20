import styled from 'styled-components/native';
export const AuthButton = styled.TouchableOpacity<{authSize: string}>`
  width: ${props => (props.authSize === 'login' ? '130px' : '180px')};
  height: 50px;
  border-color: #ffffff;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  background-color: #dc0000c2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
