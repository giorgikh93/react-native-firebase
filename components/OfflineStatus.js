import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../assets/colors';
import { useNetInfo } from '@react-native-community/netinfo'



function OfflineStatus(props) {
    const netInfo = useNetInfo();

    return (
        netInfo.type !== 'unknown' && netInfo.isInternetReachable === false ? <View style={styles.container}>
            <Text style={{ color: colors.light }}>No internet connection</Text>
        </View> : null
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    },

});

export default OfflineStatus;