import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';
import CustomInput from '../components/CustomInput';
import Separator from '../components/Separator';
import useError from '../hooks/useError'
import ErrorMessage from '../components/ErrorMessage'
import LottieView from 'lottie-react-native'
import {createAccount} from '../api/auth'


function Account({ navigation }) {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [done, setDone] = useState(false)
    const { error, setError } = useError();


   async function onPress() {
        if (!email && !userName && !password && !repeatPassword) {
            setError({ state: true, text: 'Please insert required fields' })
        } else if (!email) {
            setError({ state: true, text: 'Please insert email' })
        } else if (!userName) {
            setError({ state: true, text: 'Please insert userName' })
        } else if (!password) {
            setError({ state: true, text: 'Please insert password' })
        } else if (!repeatPassword) {
            setError({ state: true, text: 'Please repeat password' })
        } else {
            await createAccount(email, password,userName)
            setDone(true);
            setTimeout(() => {
                navigation.navigate('login', { fromAccount: true })
            }, 1000)
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/account.jpg')}>
                {done ?
                    <View style={styles.lottieWrapper}>
                        <LottieView
                            source={require('../assets/done.json')}
                            autoPlay
                            loop={false}
                            style={styles.animation}
                            onAnimationFinish={() => setDone(false)}
                        />
                    </View>
                    :
                    <>
                        <CustomInput placeholder='Email' onChange={text => setEmail(text)} value={email}/>
                        <Separator />
                        <CustomInput placeholder='Username' onChange={text => setUserName(text)} value={userName}/>
                        <Separator />
                        <CustomInput placeholder='Password' secureTextEntry={true} onChange={text => setPassword(text)} value={password}/>
                        <Separator />
                        <CustomInput placeholder='Repeat password' secureTextEntry={true} onChange={text => setRepeatPassword(text)} value={repeatPassword}/>
                        <Separator height={25} />
                        <AppButton title='Save' onPress={onPress} />
                        <Separator />

                        {error.state && <ErrorMessage errorText={error.text} />}
                    </>
                }
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    animation: {
        width: 250,
    },
    lottieWrapper: {
        alignItems: 'center',

    }
});

export default Account;