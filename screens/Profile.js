import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useStateValue } from '../StateProvider'
import RoundedImage from '../components/RoundedImage'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from '../assets/colors'
import { removeUser } from '../service/authService'
import {logOut} from '../api/auth'
import auth from '@react-native-firebase/auth'


function Profile({ navigation, route }) {
   const [{ user }, dispatch] = useStateValue();


   const signOut = () => {
      logOut()
      removeUser();
      dispatch({ type: 'SIGN__OUT', payload: null })
   }

   const removeAccount = ()=>{
      try {
         auth().currentUser.delete()
         
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Holaaaa! <Icon name='rocket'/> </Text>
         <Text style={styles.text}>{user._user.email}</Text>
         <RoundedImage user={user}/>
         <View style={styles.swipeable}>
            <TouchableOpacity style={styles.listItemWrapper} onPress={() => Alert.alert(
               "You are about to sign out",
               "Are you sure to preceed?",
               [
                  {
                     text: "Cancel",
                     onPress: () => console.log("Cancel Pressed"),
                     style: "cancel",
                  },
                  {
                     text: "ok",
                     onPress: () => signOut(),
                  },
               ],
               {
                  cancelable: true,

               }
            )}>
               <Text style={styles.listText}>Sign out</Text>
               <Icon name='chevron-right' size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItemWrapper} onPress={() => Alert.alert(
               "You are about to delete an account",
               "Are you sure to continue?",
               [
                  {
                     text: "Cancel",
                     onPress: () => console.log("Cancel Pressed"),
                     style: "cancel",
                  },
                  {
                     text: "ok",
                     onPress: () => removeAccount(),
                  },
               ],
               {
                  cancelable: true,

               }
            )}>
               <Text style={styles.listText}>Remove account</Text>
               <Icon name='chevron-right' size={20} />
            </TouchableOpacity>
         </View>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#e7eff6',
   },
   text: {
      fontSize: 20,
      marginTop: 20,
      color: colors.dark,
      paddingLeft: 20

   },
   listText: {
      borderBottomColor: 'gray',
      marginVertical: 5,
      fontSize: 20
   },
   swipeable: {
      padding: 50,
   },
   listItemWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
   }
});

export default Profile;