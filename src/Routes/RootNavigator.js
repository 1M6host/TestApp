import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false, orientation:"portrait_up" }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LoginNav" component={LoginNavigator} />
            <Stack.Screen name="HomeNav" component={HomeNavigator} />
        </Stack.Navigator>
    );
}

