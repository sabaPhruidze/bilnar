import {createDrawerNavigator} from '@react-navigation/drawer';
import {useEffect, useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {myContext} from '../App';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const navigation = useNavigation<any>();
  const [currentScreen, setCurrentScreen] = useState('');
  const {state, dispatching} = useContext(myContext);
  const {isAuth, switchBG} = state;

  // keep your RED header toggle tied to current screen
  useEffect(() => {
    const unsub = navigation.addListener('state', () => {
      const name = navigation.getCurrentRoute()?.name ?? '';
      setCurrentScreen(name);
      dispatching('SWITCH_BG_RED', name === 'Main');
    });
    return unsub;
  }, [navigation, dispatching]);

  return (
    <Drawer.Navigator
      initialRouteName={isAuth ? 'MainStack' : 'AuthStack'}
      // when logged out, disable gestures globally
      screenOptions={{swipeEnabled: !!isAuth}}>
      {isAuth ? (
        // ===== LOGGED IN => show MAIN with drawer & header =====
        <Drawer.Screen
          name="MainStack"
          component={MainStack}
          options={{
            title: 'All',
            headerStyle: {height: 80, backgroundColor: '#d60202'},
            headerTintColor: switchBG ? 'white' : 'black',
            headerTitleStyle: {color: switchBG ? 'white' : 'black'},
            headerTitleAlign: 'center',
          }}
        />
      ) : (
        // ===== LOGGED OUT => show AUTH, hide/disable drawer UI =====
        <Drawer.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            headerShown: false,
            swipeEnabled: false,
            drawerItemStyle: {display: 'none'}, // hide from drawer list
          }}
        />
      )}
    </Drawer.Navigator>
  );
}
