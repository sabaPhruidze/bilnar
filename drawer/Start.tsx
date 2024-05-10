import {createDrawerNavigator} from '@react-navigation/drawer';
import Authentication from '../navigation/Authentication';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useNavigation} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const navigation = useNavigation();
  const currentScreen = navigation.getCurrentRoute().name;
  console.log(currentScreen);

  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown:
            currentScreen === 'Authentication' ||
            currentScreen === 'Login' ||
            currentScreen === 'Register'
              ? false
              : true,
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
