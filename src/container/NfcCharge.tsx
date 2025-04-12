import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import nfcManager, { NfcTech } from 'react-native-nfc-manager';

const NfcCharge = () => {

    useEffect(() => {
        // Check if NFC is supported when the component mounts
        nfcManager.isSupported().then(isSupported => {
            console.log('Is NFC Supported?', isSupported);
            if (!isSupported) {
                Alert.alert('NFC Not Supported', 'This device does not support NFC.');
            }
        });
    }, []);

    const readNdef = async () => {
        console.log('start')
        try {
            // Start scanning
            await nfcManager.requestTechnology(NfcTech.Ndef);

            // Get tag info
            const tag = await nfcManager.getTag();
            console.log('Tag found:', tag);
            Alert.alert('NFC Tag Detected', JSON.stringify(tag));

        } catch (ex: any) {
            console.log('ex', ex)
            console.warn('Oops!', ex?.message || ex?.toString?.() || 'Unknown error');
            Alert.alert('Scan Failed', ex?.message || 'Something went wrong');
        } finally {
            // Stop scanning
            await nfcManager.cancelTechnologyRequest();        
            console.log('end')
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={readNdef}>
                <Text style={styles.buttonText}>Scan a Tag</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NfcCharge;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
