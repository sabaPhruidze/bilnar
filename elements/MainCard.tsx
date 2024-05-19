import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  width: 90%;
  margin-top: 70px;
  position: relative;
`;

export const CardContainer = styled.View`
  width: 100%;
  height: 150px;
  background-color: #ffffff;
  margin-top: 30px;
  padding: 10px;
  border-radius: 20px;
  elevation: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RepeatText = styled.Text`
  background-color: #ab0101;
  color: white;
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;

export const Circle = styled.Image`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 5px;
  top: 20px;
`;

export const InsideContainer = styled.View`
  width: 84%;
  height: 80%;
`;
export const InsideHeader = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #ab0101;
`;

export const InsideIconBox = styled.View`
  width: 100%;
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InsideIcon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const InsideIconBoxText = styled.Text`
  font-size: 12px;
  color: orange;
  margin-right: 5px;
`;
export const TextArea = styled.Text`
  font-size: 16px;
`;
