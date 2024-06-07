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