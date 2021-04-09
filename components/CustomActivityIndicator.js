import React from 'react';
import { View, StyleSheet,ActivityIndicator } from 'react-native';
import {colors} from '../assets/colors'



function CustomActivityIndicator(props) {
  return (
      <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.secondary}/>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
       height:'100%',
       width:'100%',
       position:'absolute',
       zIndex:1,
       backgroundColor:'white',
       justifyContent:'center',
       opacity:0.8
   }
});

export default CustomActivityIndicator;