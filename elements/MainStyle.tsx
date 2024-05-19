import styled from 'styled-components/native';
import {AuthBGView} from './AuthBGView';
// Main Style
export const MSExampleText = styled.Text`
  width: 110px;
  height: 30px;
  background-color: #ef5656;
  font-size: 18px;
  font-weight: 400;
  border-radius: 0 10px 10px 0;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 20px;
`;

export const MSExampleBGView = styled(AuthBGView)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
