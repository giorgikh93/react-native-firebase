import firestore from '@react-native-firebase/firestore'
import { useStateValue } from '../StateProvider'
import _ from 'lodash'


function useProduct(props) {
    const [{ }, dispatch] = useStateValue()

    const getProducts = () => {
        dispatch({ type: 'SET__LOADING', payload: true })
        firestore()
            .collection('products')
            .onSnapshot(docs => {
                let products = [];
                docs.forEach(doc => {
                    let data = doc.data();
                    let id = doc.id;
                    data.id = id
                    products.push(data)
                })
                dispatch({ type: 'SET__LOADING', payload: false })
                return dispatch({ type: 'GET__PRODUCTS', payload: products })
            })
    }

    const updateProduct = async (title, price, photoURL, id, category) => {
        firestore()
            .collection('products').doc(id).update({
                title, price, photoURL, id, category
            })

 
    }

    const addProduct = (title, price, photoURL, category) => {
        let id = _.uniqueId() * Math.floor(Math.random() * 10000)
        firestore().collection('products').add({
            title, price, photoURL, id, category
        })
    }

    const deleteProduct = (id) => {
        // var jobskill_query = firestore().collection('products').where('id', '==', id);
        // jobskill_query.get().then(function (querySnapshot) {
        //     querySnapshot.forEach(function (doc) {
        //         doc.ref.delete();
        //     });
        // });
        firestore()
        .collection('products').doc(id).delete()
    }
    return { addProduct, getProducts, deleteProduct, updateProduct }
}


export default useProduct;