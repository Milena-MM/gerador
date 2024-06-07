import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/index.js";
import { Passwords } from "./pages/password/index.js";


const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" 
      component={Home}
      options={{
        headerShown:false,
      }}
       />

      <Tab.Screen name="passwords" component={Passwords} />
    </Tab.Navigator>
  );
}

export default Routes;
