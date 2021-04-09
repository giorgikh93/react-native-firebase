import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Details from '../screens/Details';
import Categories from '../screens/Categories';

const Stack = createStackNavigator();



function CategoryNavigator(props) {
  return (
    <Stack.Navigator initialRouteName='Categories'>
      <Stack.Screen name='Categories' component={Categories} options={{headerShown:false}}/>
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  );
}


export default CategoryNavigator;