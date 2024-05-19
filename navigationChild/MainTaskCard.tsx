import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  Container,
  CardContainer,
  RepeatText,
  InsideContainer,
  Circle,
  InsideHeader,
  InsideIcon,
  InsideIconBox,
  InsideIconBoxText,
  TextArea,
} from '../elements/MainCard';

const MainTaskCard = () => {
  return (
    <Container>
      <CardContainer>
        <RepeatText>unlimited</RepeatText>
        <Circle source={require('../assets/images/circleNothing.png')} />
        <InsideContainer>
          <InsideHeader>Headline</InsideHeader>
          <InsideIconBox>
            <InsideIcon source={require('../assets/images/star.png')} />
            <InsideIconBoxText> 0 Exp</InsideIconBoxText>
            <InsideIcon source={require('../assets/images/coin.png')} />
            <InsideIconBoxText> 5</InsideIconBoxText>
          </InsideIconBox>
          <TextArea>
            Contribute to the development of a new software application by
            writing clean, efficient, and well-documented code.
          </TextArea>
        </InsideContainer>
      </CardContainer>
    </Container>
  );
};

export default MainTaskCard;
