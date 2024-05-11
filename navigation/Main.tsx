import {View, Text} from 'react-native';

import {AuthBGView} from '../elements/AuthBGView';
import SwitchForBG from '../navigationChild/SwitchForBG';
import React, {useContext} from 'react';
import {myContext} from '../App';
import MainTaskCard from '../navigationChild/MainTaskCard';

const Main = () => {
  const MainContext = useContext(myContext);
  const {state} = MainContext;
  const {switchBG} = state;
  return (
    <AuthBGView style={{backgroundColor: switchBG ? 'black' : 'white'}}>
      <SwitchForBG />
      <MainTaskCard />
    </AuthBGView>
  );
};

export default Main;
