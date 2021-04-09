import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppPicker from './AppPicker'

function CategoryPicker({icon,numberOfColumns,category,setCategory}) {
  return (
    <View style={styles.container}>
    <AppPicker icon={icon} numberOfColumns={numberOfColumns} category={category} setCategory={setCategory}/>
 </View>
   );
}

const styles = StyleSheet.create({
    container: {
       height:50,
       width:'100%',
       paddingLeft:30,
       paddingRight:30,
    }
 });

export default CategoryPicker;