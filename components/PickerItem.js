import React from 'react';
import { View, StyleSheet, Text,  TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/colors';


function PickerItem({ icon, name, onPress,color =colors.light }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(name)}>
            <View>
                <View style={styles.round}>
                    <Ionicons name={icon} size={30} color={color}/>
                <Text style={{color:color}}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'33.33%',
        marginVertical:20,
    },
    round:{
        justifyContent:'center',
        alignItems:'center',
    }
});

export default PickerItem;