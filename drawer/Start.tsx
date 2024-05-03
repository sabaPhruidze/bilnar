import {createDrawerNavigator} from '@react-navigation/drawer';
import Authentication from '../navigation/Authentication';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

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
