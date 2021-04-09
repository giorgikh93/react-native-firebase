import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';
import CustomInput from '../components/CustomInput'
import AppButton from '../components/AppButton'
import Separator from '../components/Separator'
import useError from '../hooks/useError'
import ErrorMessage from '../components/ErrorMessage'
import { useStateValue } from '../StateProvider'
import CustomActivityIndicator from '../components/CustomActivityIndicator'
import { setUser } from '../service/authService'
import {login} from '../api/auth'


function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, setError } = useError();
  const [loading, setLoading] = useState(false)

  async function onPress() {
    if (!email && !password) {
      setError({ state: true, text: 'Please insert required fields' })
    } else if (!email) {
      setError({ state: true, text: 'Please insert email' })
    } else if (!password) {
      setError({ state: true, text: 'Please insert valid password' })
    } else {
      setLoading(true);
      Keyboard.dismiss()
      setTimeout(() => {
        setError({ state: false, text: '' })
        setLoading(false)
        login(email, password)
        setUser({ email, password })
      }, 2000)
     

      // setLoading(false)
      // Alert.alert('An error has occured', 'Access denied', [{ title: 'OK' }])

    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/images/login.jpg')}>
        <>
          <CustomInput placeholder='Email' textColor='#fff' onChange={text => setEmail(text)} value={email}/>
          <Separator />
          <CustomInput placeholder='Password' textColor='#fff' onChange={text => setPassword(text)} secureTextEntry={true} value={password}/>
          <Separator height={20} />
          {loading && <CustomActivityIndicator />}
          <AppButton title='Sign in' onPress={onPress} />
          {error.state && <ErrorMessage errorText={error.text} />}
          <View style={{ flexDirection: 'row', padding: 30 }}>
            <Text style={styles.text}>Don't have an account yet? </Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('account')}>
              <Text style={[styles.text, { borderBottomColor: '#fff', borderBottomWidth: 1 }]}>Sign up</Text>
            </TouchableWithoutFeedback>
          </View>
        </>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: '#fff'
  }
});

export default Login;