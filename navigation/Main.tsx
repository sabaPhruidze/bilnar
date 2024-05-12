import {AuthBGView} from '../elements/AuthBGView';
import SwitchForBG from '../navigationChild/SwitchForBG';
import React, {useContext} from 'react';
import {myContext} from '../App';
import MainTaskCard from '../navigationChild/MainTaskCard';
import {MSExampleText, MSExampleBGView} from '../elements/MainStyle';

const Main = () => {
  const MainContext = useContext(myContext);
  const {state} = MainContext;
  const {switchBG} = state;
  return (
    <MSExampleBGView style={{backgroundColor: switchBG ? 'black' : 'white'}}>
      <MSExampleText>Example</MSExampleText>
      <SwitchForBG />
      <MainTaskCard />
    </MSExampleBGView>
  );
};

export default Main;
