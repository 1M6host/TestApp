import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../Constants/Colors';
import BookingView from '../Views/Home/BookingView';
import Message from '../Screens/Message';
import News from '../Screens/News';
import Account from '../Screens/Account';


const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
    return (
        <Tab.Navigator backBehavior='initialRoute' initialRouteName='Home' screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home-circle'
                        : 'home-circle-outline';
                } else if (route.name === 'Booking') {
                    iconName = focused ? 'bookmark' : 'bookmark-outline';
                } else if (route.name === 'Message') {
                    iconName = focused ? 'message' : 'message-alert-outline';
                } else if (route.name === 'News') {
                    iconName = focused ? 'content-paste' : 'content-copy';
                } else if (route.name === 'Account') {
                    iconName = focused ? 'account-circle' : 'account-circle-outline';
                }
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.orange,
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Booking" component={BookingView} options={{ headerShown: false }} />
            <Tab.Screen name="Message" component={Message} options={{ headerShown: false }} />
            <Tab.Screen name="News" component={News} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

