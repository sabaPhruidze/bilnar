import {createDrawerNavigator} from '@react-navigation/drawer';
import {useEffect, useRef, useState} from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState('');
  const ALR =
    currentScreen === 'Authentication' ||
    currentScreen === 'Login' ||
    currentScreen === 'Register';
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentRouteName = navigation.getCurrentRoute().name;
      setCurrentScreen(currentRouteName);
    });

    return unsubscribe;
  }, [navigation]);

  console.log('Current Screen:', currentScreen); // You can log or use the current screen name here

  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: ALR ? false : true,
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
