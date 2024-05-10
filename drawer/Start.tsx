import {createDrawerNavigator} from '@react-navigation/drawer';
import {useEffect, useRef, useState} from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {myContext} from '../App';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState('');
  const ALR =
    currentScreen === 'Authentication' ||
    currentScreen === 'Login' ||
    currentScreen === 'Register';
  const startContext = useContext(myContext);
  const {state, dispatching} = startContext;
  const {switchBGRED} = state;
  useEffect(() => {
    if (ALR) {
      dispatching('SWITCH_BG_RED', false);
    } else if (currentScreen === 'Main') {
      dispatching('SWITCH_BG_RED', true);
    } else {
      ('');
    }
    const unsubscribe = navigation.addListener('state', () => {
      const currentRouteName = navigation.getCurrentRoute().name;
      setCurrentScreen(currentRouteName);
    });

    return unsubscribe;
  }, [navigation, currentScreen]);

  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: ALR ? false : true,
          headerStyle: {
            height: 80,
          },
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
