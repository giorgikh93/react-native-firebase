import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function Card({  url, height,name }) {
    return (
        <View style={[styles.container, { height: height, width: '100%' }]}>
            <View style={{alignItems:'center',width:'100%',marginVertical:10,}}>
                <Text style={{fontSize:20}}>{name}</Text>
            </View>
            <Image style={[styles.image, { height: height-20, width: '100%' }]} source={{ uri: url }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 10,

    },
    image: {
    }
});

export default Card;