<<<<<<< HEAD
import {createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/index";
import { Passwords } from "./pages/password/index";

import {Ionicons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                headerShown: false,
                tabBaIcon: (focused, size, color) => {
                    if(focused){
                        return <Ionicons size = {size}  color = {color} name = "home" />
                    }

                    return <Ionicons size = {size}  color = {color} name = "home-outline" />
                }
            }}
            />

            <Tab.Screen
            name="password"
            component={Passwords}
            options={{
                headerShown: false,
                tabBaIcon: (focused, size, color) => {
                    if(focused){
                        return <Ionicons size = {size}  color = {color} name = "lock-closed" />
                    }

                    return <Ionicons size = {size}  color = {color} name = "lock-closed-outline" />
                }
            }}
            />
        </Tab.Navigator>
    ) 
}

export default Routes;
=======
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
>>>>>>> 2895c1b3bc5d510b5ff5f22015178d9d716b4d66
