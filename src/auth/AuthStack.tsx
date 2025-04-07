import React from 'react';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './Login';
import Onboarding from './Onboarding';
import BottomTabNavigator from '../container/navigation';
import Signup from './Signup';
import Password from './Password';


const AuthStack = () => {
    const Stack = createNativeStackNavigator<any>();
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '400',
                fontSize: 22
            },
        }} >
            <Stack.Screen options={{ headerShown: false }} name={'Onboarding'} component={Onboarding} />
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Signup'} options={{ headerTitle: 'Create Your Account ' }} component={Signup} />
            <Stack.Screen name={'Password'} component={Password} />
            <Stack.Screen options={{ headerShown: false, }} name={'Container'} component={BottomTabNavigator} />

        </Stack.Navigator>
    );
};

export default AuthStack;
