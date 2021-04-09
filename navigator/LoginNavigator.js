import React from 'react';
import {  StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import Account from '../screens/Account'

const Stack = createStackNavigator();


function LoginNavigator(props) {
    return (
   <Stack.Navigator >
       <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
       <Stack.Screen name='account' component={Account} />
   </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default LoginNavigator;