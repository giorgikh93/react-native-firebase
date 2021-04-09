import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from '../assets/colors';

let options = {
    title: 'Select Image',
    customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

function ImagePicker({ setImageUri, imageUri }) {

    const chooseImage = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setImageUri(response.uri)
            }
        });
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.picker} onPress={chooseImage}>
                {imageUri === '' ? <Icon name='plus' size={20} style={styles.icon} /> : <Image style={styles.image} source={{ uri: imageUri }} />}
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        height: 80,

    },
    picker: {
        width: '30%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: colors.light,
        position: 'relative',
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
    },
    icon: {
        
    },
    image:{
        width:'100%',
        height:'100%'
    }
});

export default ImagePicker;