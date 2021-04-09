import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../assets/colors';

function ScrollViewItem({ title, price, image,onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.textWrapper}>
                <Text numberOfLines={1}>{title}</Text>
                <Text style={{color:colors.secondary}}>{price}$</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height:200,
        width: 140,
        marginRight:10,
        backgroundColor:colors.light,
        borderRadius:10,
        overflow:'hidden'
        
    },
    image: {
        height: '70%',
        width: '100%'
    },
    textWrapper:{
        padding:5
    }
});

export default ScrollViewItem;