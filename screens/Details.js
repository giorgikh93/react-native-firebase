import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../assets/colors';
import Counter from '../components/Counter'
import LottieView from 'lottie-react-native'




function Details({ route, navigation }) {
    const [qty, setQty] = useState(0);
    const [done, setDone] = useState(false)



    function increment() {
        setQty(prev => prev + 1)
    }
    function decrement() {
        if (qty !== 0) {
            setQty(prev => prev - 1)
        }
    }
    const { item } = route.params

    const checkout = () => {
        setDone(true)
        setTimeout(() => {
            setQty(0),
                navigation.goBack();
            setDone(false)
        }, 500)
    }



    function returnToInitial() {
        setDone(false)

    }

    return (
        <View style={styles.container}>
            {done ? <View style={styles.lottieWrapper}>
                <LottieView
                    color={colors.primary}
                    source={require('../assets/done.json')}
                    autoPlay
                    loop={false}
                    style={styles.animation}
                    onAnimationFinish={() => returnToInitial()}
                />
            </View> : <View style={[styles.detailWrapper]}>
                <View style={{flexDirection:item.photoURL && 'row',justifyContent:item.photoURL && 'space-between',padding:item.photoURL && 10}}>
                <Text style={styles.title}>{item.tags || item.title}</Text>
                {item.price && <Text style={[styles.title,{color:colors.secondary}]}>{item.price}$</Text>}
                </View>
                <Image source={{ uri: item.previewURL || item.photoURL}} style={styles.image} />
                <View style={styles.checkoutWrapper}>
                    <Counter increment={increment} decrement={decrement} qty={qty} />
                    <TouchableOpacity style={{ backgroundColor: colors.secondary, padding: 10, borderRadius: 10, justifyContent: 'center', }} onPress={() => qty !== 0 && Alert.alert('Buying approval', `you are about to buy ${item.tags || item.title} - ${qty} items`, [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                        },
                        {
                            text: "Proceed",
                            onPress: () => checkout(),
                        },
                    ],
                        {
                            cancelable: true,

                        }
                    )}>
                        <Text style={{ color: colors.light, fontSize: 18 }}>Checkout</Text>
                    </TouchableOpacity>

                </View>

            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: {
        height: 250,
        width: '100%',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20
    },
    detailWrapper: {
        padding: 10,
        overflow: 'hidden',
    },
    title: {
        textAlign: 'center',
        fontSize: 20
    },
    checkoutWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lottieWrapper: {
        alignItems: 'center',
        height: 500

    },
    animation: {
        width: 250,
    },
});

export default Details;