import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppButton, AppInput } from '../components'
import { Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { getAuth } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation()

    const [fields, setFields] = useState({
        email: 'hasnaindevs23@gmail.com',
        password: '123456',
    });
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const handleLogin = async () => {
        try {
            const { email, password } = fields;
            if (!email || !password) {
                Alert.alert('Error', 'Please enter both email and password');
                return;
            }

            // Firebase authentication
            const userCredential = await getAuth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            Alert.alert('Success', `Welcome back, ${user.email}!`);
            navigation.navigate('Container')
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Error', 'No user found with this email');
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert('Error', 'Incorrect password');
            } else {
                Alert.alert('Error', 'An error occurred. Please try again later');
            }
        }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.boldTtext}>Lets Get Started</Text>
            <Text>Sign up or login to elevate your events experience.</Text>
            <AppInput
                placeholder="Enter email"
                label="Email"
                value={fields.email}
                onChangeText={(text: string) => setFields({ ...fields, email: text })}
            />
            <AppInput
                placeholder="Enter password"
                label="Password"
                value={fields.password}
                onChangeText={(text: string) => setFields({ ...fields, password: text })}
                secureTextEntry
            />
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        tintColor='black'
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={[styles.forgetPassword, { color: 'black', fontSize: 12, fontWeight: '400' }]}>terms & conditions</Text>
                </View>
                <Text onPress={() => navigation.navigate('Password')} style={styles.forgetPassword}>Forgot Password?</Text>
            </View>
            <AppButton title="Sign in" onPress={handleLogin} />
            <AppButton title="Countinue with Google" onPress={handleLogin} variants='white' />
            <AppButton title="Countinue with Apple" onPress={handleLogin} variants='white' />
            <Text style={[styles.infoText, { marginTop: 30 }]}>
                Don't have an account? <Text style={[{ fontWeight: '600' }]}>Sign Up</Text>
            </Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 20,
        justifyContent: 'center',
    }, infoText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    boldTtext: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
    },
    forgetPassword: {
        color: 'blue',
        fontWeight: '400',
        textDecorationLine: 'underline'
    }
})
