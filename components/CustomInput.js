import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

function CustomInput({ placeholder, textColor='#fff', onChange, secureTextEntry,value}) {
    return (
        <View style={[styles.container]}>
            <TextInput
                style={[styles.input, { color: textColor }]}
                placeholder={placeholder}
                placeholderTextColor={textColor}
                onChangeText={text=>onChange(text)}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    input: {
        width: '90%',
        borderRadius: 20,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f3f3f3',
        fontSize: 18
    }
});

export default CustomInput;