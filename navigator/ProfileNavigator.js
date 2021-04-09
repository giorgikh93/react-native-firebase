import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile';
const Stack = createStackNavigator()



function ProfileNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default ProfileNavigator;