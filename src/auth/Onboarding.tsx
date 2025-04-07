import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


import { AppButton } from '../components'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ height: 200, width: 200, resizeMode: 'contain' }}
                    source={require('../assets/imgs/splash.png')} />
            </View>

            <View style={styles.getStarted}>
                <Text style={styles.welcomeText}>
                    Discover and or create amazing events on BuzzWerl, the ultimate event management platform. Join now!
                </Text>
                <Text style={styles.boldTtext}>
                    Lets Get Started
                </Text>
                <AppButton theme='red' title='Get Started' onPress={() => navigation.navigate('Signup')} />
                <Text style={styles.welcomeText}>
                    Already have an account? <Text onPress={() => navigation.navigate('Login')} style={[styles.welcomeText, { color: 'blue', fontWeight: '600' }]}>Login</Text>
                </Text>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        padding: 20
    },
    getStarted: {
        flex: 1,
        gap: 20,
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: '#57636C'
    },
    boldTtext: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
    }
})