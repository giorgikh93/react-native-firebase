import React, {  useState } from 'react';
import { View, StyleSheet,  Alert, Keyboard } from 'react-native';
import { colors } from '../assets/colors';
import AppButton from '../components/AppButton';
import CustomInput from '../components/CustomInput';
import Chart from '../components/Chart'
import useApi from '../helper/helper'
import { useStateValue } from '../StateProvider';

function CovidTracker(props) {
   const [value, setValue] = useState('');
   const [{ global, countryStats }] = useStateValue();
   const { getCountryStatsGlobal, getCountryStats } = useApi();


   async function handleSearch() {
      const res = await getCountryStats(value)
      Keyboard.dismiss();
      if (res !== 200) {
         Alert.alert('error', `error has occuerd with status code ${res}`, [{ title: 'OK' }])
      }
   }
   return (
      <View style={styles.container}>
         <View style={styles.inputWrapper}>
            <CustomInput placeholder='Search country...' onChange={country => setValue(country)} textColor={colors.dark} />
         </View>
         <View style={styles.buttonWrapper}>
            <AppButton title='search' onPress={() => handleSearch()} />
         </View>

         {countryStats.length > 0 &&
         <Chart
            data={countryStats}
            title={countryStats[0].Country}
         /> }
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
   },
   inputWrapper: {
      borderBottomWidth: 1,
      borderBottomColor: colors.dark,
      width: '80%',
      marginTop: 20
   },
   buttonWrapper: {
      width: '80%',
      marginTop: 20
   }
});

export default CovidTracker;