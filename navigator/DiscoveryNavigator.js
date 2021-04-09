import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Discovery from '../screens/Discovery';
import Details from '../screens/Details'



const Stack = createStackNavigator();
function CovidTrackerNavigator(props) {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Discovery' component={Discovery} options={{headerShown:false}}/>
          <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
   );
}



export default CovidTrackerNavigator;