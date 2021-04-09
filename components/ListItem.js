import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card'


function ListItem({ name,height,url }) {
    return (
        <View style={[styles.container]}>
            <Card name={name} height={height} url={url}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:20,
    },
    
});

export default ListItem;