import styled from 'styled-components/native';

export const LogRegAlertDivDark = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00000083;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const LogRegAlertDiv = styled.View`
  width: 240px;
  height: 250px;
  position: absolute;
  background-color: #a9010198;
  justify-content: space-evenly;
  border-radius: 10px;
  padding: 10px;
`;
export const LogRegAlertTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 800;
`;
export const LogRegAlertText = styled.Text`
  color: white;
  font-size: 16px;
`;
export const LogRegAlertBtn = styled.TouchableOpacity`
  width: 130px;
  height: 40px;
  border: 1px solid #ffffff9e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ea222286;
`;
export const LogRegAlertBtnText = styled.Text`
  color: white;
  font-size: 16px;
`;
