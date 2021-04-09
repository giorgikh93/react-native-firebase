
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';


export const login = async (email, password) => {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('signed in!');
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    Alert.alert('Email already in use !')
                    break;
                case 'auth/invalid-email':
                    Alert.alert('invalid-email')
                    break;
                    case 'auth/wrong-password':
                        Alert.alert('email or password is incorrect');
                        break;
                    default:
                        Alert.alert('Unexpacted error has occured')
            }
        });

}

export const createAccount = async (email, password, userName) => {
    auth()
        .createUserWithEmailAndPassword(email, password, userName)
        .then((result) => {
            console.log(result.user)
            result.user.updateProfile({
                displayName: userName
            })
            console.log('User account created & signed in!');
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    Alert.alert('Email already in use !')
                    break;
                case 'auth/invalid-email':
                    Alert.alert('invalid-email')
                    break;
                    default:
                        Alert.alert('Unexpacted error has occured')
            }
        });
}


export const logOut = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}
