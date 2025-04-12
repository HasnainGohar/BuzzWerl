import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import BuzzPay from './buzzPay/BuzzPay';
import NfcCharge from './NfcCharge';

const Bottom = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Bottom.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string | undefined
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === 'BuzzPay') {
                        iconName = focused ? 'wifi' : 'wifi-outline'
                        return <MaterialCommunityIcons name="" color={color} size={focused ? size + 5 : size} />
                    }
                    else if (rn === 'AddEvent') {
                        iconName = focused ? 'plussquare' : 'plussquareo'
                        return <AntDesign name={iconName} color={color} size={focused ? size + 5 : size} />
                    } else if (rn === 'Messages') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'


                    } else if (rn === 'MyProfile') {
                        iconName = focused ? '' : 'chatbubbles-outline'

                    }

                    return <Ionicons name={iconName} color={color} size={focused ? size + 5 : size} />
                },
            })}
        >
            <Bottom.Screen
                name="Home"
                component={Home}
            />
            <Bottom.Screen
                name="BuzzPay"
                component={BuzzPay}
            />
            <Bottom.Screen
                name="AddEvent"
                component={NfcCharge}
            />
            <Bottom.Screen
                name="Messages"
                component={BuzzPay}
            />
            <Bottom.Screen
                name="MyProfile"
                component={BuzzPay}
            />
        </Bottom.Navigator>
    );
};

export default BottomTabNavigator;