import React, { useEffect,useState } from 'react';
import { StyleSheet,Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginNavigator from './LoginNavigator';
import { useStateValue } from '../StateProvider'
import CovidTracker from '../screens/CovidTracker'
import DiscoveryNavigator from './DiscoveryNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/colors'
import ProfileNavigator from './ProfileNavigator';
import OfflineStatus from '../components/OfflineStatus'
import auth from '@react-native-firebase/auth';
import HomeNavigator from './HomeNavigator';
import CategoryNavigator from './CategoryNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator({ }) {
    const [{ user }, dispatch] = useStateValue();
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged(user) {
        dispatch({ type: 'SET__USER', payload: user })
        if (initializing) setInitializing(false);
      }
    useEffect(() => {
        Keyboard.dismiss()
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // async function getUserFromStore() {
        //     const userFromStorage = await getUser();
        //     if (userFromStorage) dispatch({ type: 'SET__USER', payload: userFromStorage })
        // }
        // getUserFromStore();   this is to get user from AsyncStorage
        return subscriber; // unsubscribe on unmount
    }, [])
    if (initializing) return null;
    return (
        <>
            <OfflineStatus />
            {!user ? <LoginNavigator /> :
                <Tab.Navigator
                    labelStyle={{padding:10}}
                    swipeEnabled
                    initialRouteName='Home'
                    tabBarOptions={{
                        activeTintColor: colors.primary,
                        inactiveTintColor: colors.secondary,
                        activeTintColor: colors.primary,

                        labelStyle: {
                            fontSize: 13,
                            paddingBottom:3
                        },
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home';
                            } else if (route.name === 'CovidTracker') {
                                iconName = focused ? 'body' : 'body';
                            } else if (route.name === 'Discovery') {
                                iconName = focused ? 'cart' : 'cart';
                            } else if (route.name === 'Categories') {
                                iconName = focused ? 'pizza' : 'pizza';
                            } else if (route.name === 'Profile') {
                                iconName = focused ? 'logo-github' : 'logo-github';
                            }

                            // You can return any component that you like here!
                            return (
                                <Ionicons style={route.name === 'Home' && styles.icon} name={iconName} size={route.name === 'Home' ? 25 : 20} color={route.name === 'Home' ? '#fff' : colors.primary} />
                            )
                        },
                    })}>
                    <Tab.Screen name='CovidTracker' component={CovidTracker} />
                    <Tab.Screen name='Discovery' component={DiscoveryNavigator} />
                    <Tab.Screen name='Home' component={HomeNavigator} />
                    <Tab.Screen name='Categories' component={CategoryNavigator} />
                    <Tab.Screen name='Profile' component={ProfileNavigator} />


                </Tab.Navigator >}
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
    icon: {
        backgroundColor: colors.secondary,
        borderRadius: 30,
        padding: 12,
        position: 'absolute',
        bottom: 3
    }
});

export default AppNavigator;