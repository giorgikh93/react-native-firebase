import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../assets/colors';
import Swipable from 'react-native-gesture-handler/Swipeable'

//i should modify component so that on admins page there will flexDirection row and small image and on products page there will rounded big image.
function ProductItem({ title, price, imageUri,onPress,style,imageStyle,renderRightActions ,item}) {
    return (
        <Swipable renderRightActions={renderRightActions && renderRightActions} >
        <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>onPress(item)}>
            <View style={style ? style : styles.container}>
                <Image source={{ uri: imageUri }} style={imageStyle ? imageStyle : styles.image} />
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={[styles.text,{color:colors.secondary}]}>{price} $</Text>
                </View>

            </View>
        </TouchableOpacity>
        </Swipable>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '80%',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: '70%',

    },
    textWrapper: {
        padding: 5
    },
    text: {
        fontSize: 17
    }
});

export default ProductItem;