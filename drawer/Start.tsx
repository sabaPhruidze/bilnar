import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen name="Home " component={HomeStack} />
      <Drawer.Screen name="About " component={AboutStack} />
    </Drawer.Navigator>
  );
}
