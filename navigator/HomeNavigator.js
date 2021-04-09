import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();



function HomeNavigator(props) {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  );
}


export default HomeNavigator;