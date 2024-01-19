import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IsError({ error }) {
    return (
        <View style={styles.container}>
            <Text>{error.message}</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});