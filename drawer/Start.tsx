import {createDrawerNavigator} from '@react-navigation/drawer';
import {useEffect, useRef, useState} from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useNavigation} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
}
