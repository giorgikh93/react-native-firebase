import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {
    LineChart,
} from "react-native-chart-kit";
import moment from 'moment'
import { colors } from '../assets/colors';


const Chart = ({ data, title }) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,textAlign:'center'}}>{title}</Text>
            <LineChart
                data={{
                    labels: data.slice(data.length - 7, data.length - 1).map(item => moment(item.Date).format('MMMM, DD')),
                    datasets: [
                        {
                            data: data.slice(data.length - 7, data.length - 1).map(item => item.Active)

                        }
                    ]
                }}
                width={Dimensions.get("window").width - 10} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: colors.dark,
                    backgroundGradientFrom: colors.dark,
                    backgroundGradientTo: colors.dark,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default React.memo(Chart);