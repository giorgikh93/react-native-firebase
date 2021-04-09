import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useStateValue } from '../StateProvider'
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator';
import useProduct from '../hooks/useProduct'

function Home({ navigation }) {
   const [{ products }] = useStateValue()
   const { getProducts } = useProduct()

   useEffect(() => {
      getProducts();
   }, [])
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Popular products</Text>
         <View style={styles.listWrapper}>
            <FlatList
               data={products}
               renderItem={({ item }) =>
                  <ProductItem title={item.title}
                  onPress={()=>navigation.navigate('Details',{item})}
                     price={item.price}
                     imageUri={item.photoURL} />}
               ItemSeparatorComponent={() => <Separator />}
               keyExtractor={(item) => item.id}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 10,
      paddingBottom: 10,
      flex: 1
   },
   text: {
      paddingLeft: 37,
      fontSize: 20,
      paddingBottom: 20
   },
   listWrapper: {
      width: '100%', flex: 1,
   }
});

export default Home;