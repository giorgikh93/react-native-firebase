import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {colors} from '../assets/colors'



function AppButton({ title, onPress }) {
   return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
         <View style={styles.textWrapper}>
         <Text style={styles.text}>{title}</Text>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems:'center'
   },
   textWrapper:{
      width:'85%',
      backgroundColor:colors.primary,
      alignItems:'center',
      padding:10,
      borderRadius:30,
   },
   text:{
      color:'#fff',
      fontSize:16
   }
});

export default AppButton;