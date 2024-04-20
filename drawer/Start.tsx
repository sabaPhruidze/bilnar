import {createDrawerNavigator} from '@react-navigation/drawer';
import Authentication from './Authentication';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="Authentication"
        component={Authentication}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About "
        component={AboutStack}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
}
