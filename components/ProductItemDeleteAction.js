import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../assets/colors'

import Icon from 'react-native-vector-icons/dist/FontAwesome'


function ProductItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <View style={styles.container}>
            <Icon
            style={styles.icon}
                name='trash' size={25}
                color={colors.light}
            />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        height: '100%',
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
});

export default ProductItemDeleteAction;