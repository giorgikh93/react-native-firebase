import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useStateValue } from '../StateProvider'
import ScrollViewItem from '../components/ScrollViewItem'
import { colors } from '../assets/colors';
import { useEffect } from 'react/cjs/react.development';
import _ from 'lodash'

// const filterOptions = ['Pizza', 'Burger', 'Sushi']
function Categories({ navigation }) {
   const [{ products }] = useStateValue();
   const [filterOptions, setFilterOptions] = useState([]);
   const pizzaRef = useRef();

   useEffect(() => {
      getCategoryOptions()
   }, [products])

   function getCategoryOptions() {
      let set = new Set();
      for (let i of products) {
         set.add(i.category)
      }
      setFilterOptions(Array.from(set))
   }

   const renderFilteredCategories = (option) => {
      return (
         products.filter(({ category }) => category === option).map((item, index) =>
            <ScrollViewItem
               key={index}
               title={item.title}
               price={item.price}
               image={item.photoURL}
               onPress={() => navigation.navigate('Details', { item })}
            />

         )
      )
   }
   return (
      <View style={styles.container}>
         <ScrollView  >
            {filterOptions.map((item, index) =>
               <View key={_.uniqueId()}>
                  <Text style={styles.heading}>{item}</Text>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal ref={pizzaRef} onContentSizeChange={() => pizzaRef.current.scrollToEnd()}>
                     {renderFilteredCategories(item)}
                  </ScrollView>
               </View>
            )}
         </ScrollView>
      </View>

   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.lightDark,
      flex: 1,
      paddingTop: 20,
      paddingBottom: 20
   },
   heading: {
      color: colors.light,
      fontSize: 20,
      marginVertical: 10
   }
});

export default Categories;