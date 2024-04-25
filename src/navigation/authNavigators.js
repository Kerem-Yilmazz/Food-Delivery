import React from "react";

import {createStackNavigator,TransitionPresets} from "@react-navigation/stack"
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";
import { SingInScreen } from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";

const Auth =createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name="SingInWelcomeScreen"
                component ={SingInWelcomeScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }
                    
                }
            />

            <Auth.Screen
                name="SingInScreen"
                component ={SingInScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }
                    
                }
            />
            <Auth.Screen
                name="HomeScreen"
                component ={HomeScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }
                    
                }
            />
     </Auth.Navigator>
    )
}