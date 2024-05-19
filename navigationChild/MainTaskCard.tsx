import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  Container,
  CardContainer,
  RepeatText,
  InsideContainer,
  Circle,
} from '../elements/MainCard';

const MainTaskCard = () => {
  return (
    <Container>
      <CardContainer>
        <RepeatText>unlimited</RepeatText>
        <Circle source={require('../assets/images/circleNothing.png')} />
        <InsideContainer>
          <View>
            <Text>Headline</Text>
            <Text>Icon</Text>
          </View>
          <View>
            <View>
              <Text>Icon</Text>
              <Text>100exp</Text>
            </View>
            <View>
              <Text>Icon</Text>
              <Text>5</Text>
            </View>
          </View>
          <Text>gmerogmero[ mgre[osmg irepngeringiern </Text>
        </InsideContainer>
      </CardContainer>
    </Container>
  );
};

export default MainTaskCard;
