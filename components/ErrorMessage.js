import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ErrorMessage({ errorText }) {
    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>{errorText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingTop: 10
    },
    text: {
        color: 'red',
        fontSize: 16
    }
});

export default ErrorMessage;