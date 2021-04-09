import 'react-native-gesture-handler';
import React from 'react';
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigator/DrawerNavigator'

function App(props) {



  return (
      <NavigationContainer>
        <StateProvider initialState={initialState} reducer={reducer}>
          <DrawerNavigator />
        </StateProvider>
      </NavigationContainer>
  );
}



export default App;