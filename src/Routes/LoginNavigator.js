import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../Screens/Login';
import Login from '../Screens/Login/Login';


const Stack = createNativeStackNavigator();

export default function LoginNavigator() {
    return (
        <Stack.Navigator initialRouteName='LandingPage' screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

