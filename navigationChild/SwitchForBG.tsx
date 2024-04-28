import React from 'react';
import {SwitchBG} from '../elements/SwitchBG';
import {myContext} from '../App';
import {useContext} from 'react';

const SwitchForBG = () => {
  const switchContext = useContext(myContext);
  const {state, dispatching} = switchContext;
  const {switchBG} = state;
  const toggleSwitch = () => dispatching('SWITCH_BG', !switchBG);
  return (
    <SwitchBG
      trackColor={{false: '#e0d3d3', true: '#3f3e3e'}}
      thumbColor={switchBG ? '#a40000' : '#ff0000'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={switchBG}
    />
  );
};

export default SwitchForBG;
