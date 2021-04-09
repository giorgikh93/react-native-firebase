
import firestore from '@react-native-firebase/firestore'
import { useStateValue } from '../StateProvider'



export default function useUsers() {
    const [{ }, dispatch] = useStateValue()



    const getUsers = async () => {
        firestore()
            .collection('users')
            .onSnapshot(docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push(doc.data())
                })
                return dispatch({ type: 'GET__USERS', payload: users })
            })
        return;
    }


    const addUser = (email, userName, password) => {
        firestore().collection('users').add({
            email, userName, password
        })
        return;
    }
    return { getUsers, addUser}

}
  

