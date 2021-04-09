import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'
import { colors } from '../assets/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import auth from '@react-native-firebase/auth'

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



function RoundedImage({ user }) {
    const [image, setImage] = useState({ uri: '' })

    const chooseImage = async () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                uploadImage(response.uri)
            }
        });
    }

    async function uploadImage(uri) {
        const update = {
            photoURL: uri,
        };
        await auth().currentUser.updateProfile(update);
        setImage({
            uri:uri
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={chooseImage}>
                <View style={styles.image}>
                    {<Image source={{ uri: image.uri ? image.uri : user._user.photoURL }} style={styles.imageURi} />}
                    {image.uri === '' || !user._user.photoURL && <Icon name='plus' size={20} style={styles.icon} color={colors.primary} />}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    imageURi: {
        width: '100%',
        height: '100%'
    },

    icon: {
        position: 'absolute'
    }
});

export default RoundedImage;