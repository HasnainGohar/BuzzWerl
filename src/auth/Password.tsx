import React from 'react'
import { Alert, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { AppButton, AppInput } from '../components'

import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Zod schema for validation
const schema = z.object({
    email: z.string().email('Please enter a valid email address').nonempty('Email is required'),
});

type PasswordFormData = z.infer<typeof schema>;

const Password = () => {

    const { width, height } = useWindowDimensions();

    const { control, handleSubmit, formState: { errors } } = useForm<PasswordFormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: PasswordFormData) => {
        console.log('Email submitted:', data.email);
        Alert.alert('Success', 'Password reset link sent to your email!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image style={{ height: height * 0.4, width: width * 0.5, resizeMode: 'contain' }} source={require('../assets/imgs/2-png-icon-image-only.png')} />
            </View>
            <View style={styles.formContainer}>
                <Text>
                    Please enter your registered email. So we can send your password reset instructions to your email.
                </Text>

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
                <AppButton title="Send Link" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )
}

export default Password

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        gap: 30
    }
})