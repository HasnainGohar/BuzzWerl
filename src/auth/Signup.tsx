import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import { AppButton, AppInput } from '../components';
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../theme';

import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { auth, db } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const schema = z.object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password is required'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

type SignupFormData = z.infer<typeof schema>;

const Signup = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(schema),
    });

    const handleSignup = async (data: SignupFormData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const { user } = userCredential;

            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                username: data.username,
                email: data.email,
                createdAt: new Date().toISOString(),
            });

            Alert.alert('Success', 'User account created successfully!');
        } catch (error: any) {
            console.error('Signup error:', error);
            Alert.alert('Error', error.message || 'Something went wrong');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.inner}>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { onChange, value } }) => (
                            <AppInput
                                placeholder="User Name"
                                value={value}
                                onChangeText={onChange}
                                error={errors.username?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <AppInput
                                placeholder="Email Address"
                                value={value}
                                onChangeText={onChange}
                                error={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <AppInput
                                placeholder="Password"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                error={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, value } }) => (
                            <AppInput
                                placeholder="Confirm Password"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                error={errors.confirmPassword?.message}
                            />
                        )}
                    />

                    <AppButton title="Sign Up" onPress={handleSubmit(handleSignup)} />
                    <AppButton title="or sign up with social media" variants="white" />

                    <Text style={styles.infoText}>
                        An email verification link will be sent once account has been created
                    </Text>

                    <View style={styles.termsContainer}>
                        <CheckBox />
                        <Text style={styles.termsText}>terms & conditions</Text>
                    </View>

                    <Text style={styles.loginText}>
                        Already have an account? <Text style={{ fontWeight: '600' }}>Login</Text>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    inner: {
        flex: 1,
        justifyContent: 'space-around',
        gap: 20,
    },
    infoText: {
        color: colors.lightGray,
        fontSize: 14,
        fontWeight: '400',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    termsText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '400',
    },
    loginText: {
        textAlign: 'center',
        fontSize: 14,
    },
});
