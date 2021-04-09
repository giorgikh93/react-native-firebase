import React from 'react';
import {  StyleSheet, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
import Admin from '../screens/Admin'
import {useStateValue} from '../StateProvider'

const Drawer = createDrawerNavigator()

function DrawerNavigator(props) {
   const [{user}] = useStateValue()
  return (
      <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={AppNavigator}/>
        {user  &&  user._user.email === 'giorgikhatiashvili93@yahoo.com' && <Drawer.Screen name='Admin' component={Admin}/>}
      </Drawer.Navigator>
   );
}

const styles = StyleSheet.create({
   container: {}
});

export default DrawerNavigator;