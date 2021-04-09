

import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage'

export const setUser = async (user) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(user))
    } catch (error) {
        console.log(error)
    }
}


export const getUser = async () => {
    try {
        const user = await AsyncStorage.getItem("user")
        return JSON.parse(user);
    } catch (error) {
        console.log(error)
    }
}

export const removeUser = async () => {
    try {
       await AsyncStorage.removeItem("user")
    } catch (error) {
        console.log(error)
    }
}

