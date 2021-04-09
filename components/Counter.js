import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

function Counter({increment,decrement,qty}) {


    return (
        <View style={styles.container}>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity onPress={decrement}>
                    <Icon name='minus' size={20} />
                </TouchableOpacity>
                <Text style={styles.qtyWrapper}>{qty}</Text>
                <TouchableOpacity onPress={increment}>
                    <Icon name='plus' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    buttonsWrapper: {
        flexDirection: 'row',
        alignItems:'center',

    },
    qtyWrapper:{
        padding:10,
        fontSize:20
    }
});

export default Counter;