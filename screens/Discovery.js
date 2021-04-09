import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, FlatList, TouchableOpacity, } from 'react-native';
import useApi from '../helper/helper'
import { useStateValue } from '../StateProvider'
import Separator from '../components/Separator'
import ListItem from '../components/ListItem'
import { colors } from '../assets/colors'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import CustomActivityIndicator from '../components/CustomActivityIndicator';

const filterArray = [
   'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'
]



function Discovery({ navigation }) {
   const [loading, setLoading] = useState(false);
   const [option, setOption] = useState('food')
   const [{ images, imagesData }] = useStateValue();
   const { getImages, getFoodImages } = useApi();

   useEffect(() => {
      setLoading(true)
      async function fetchImages() {
         await getImages();
         await getFoodImages('food');
         setLoading(false)
      }
      fetchImages();
   }, [])


   const filter = (filterOption) => {
      getFoodImages(filterOption)
      setOption(filterOption)
   }
   return (
      loading ?
         <CustomActivityIndicator /> :
         <View style={styles.container}>
            <Text style={styles.header}>Flowers</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               {images.map((item, index) =>
                  <TouchableOpacity key={index} style={styles.imageWrapper} onPress={() => navigation.navigate(`Details`, { item })}>
                     <Image style={styles.image} source={{ uri: item.previewURL }} />
                     <View style={styles.textWrapper}>
                        <Text style={[styles.text, { borderBottomWidth: 1 }]}>{item.tags}</Text>
                        <Text style={styles.text}>Likes: {item.likes}</Text>
                        <Text style={[styles.text, { paddingBottom: 10 }]}>downloads: {item.downloads}</Text>
                     </View>
                  </TouchableOpacity>)}
            </ScrollView>
            <Separator />
            <Text style={styles.header}>{option.toUpperCase()}</Text>
            <View style={styles.filterWrapper}>
               <View style={{
                  marginRight: 5, marginVertical: 10, flexDirection: 'row', padding: 2, alignItems: 'center', backgroundColor: '#0dc6c1',
                  borderRadius: 5
               }}>
                  <Icon name='filter' size={20} color={colors.light} />
                  <Text style={{ fontSize: 17, color: colors.light, paddingRight: 5 }}> Filter</Text>

               </View>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.filter}>
                     {filterArray.map((item, index) => <TouchableOpacity key={index} onPress={() => filter(item)}>
                        <Text style={styles.filterItem}>{item}</Text>
                     </TouchableOpacity>)}
                  </View>
               </ScrollView>
            </View>
               <FlatList
                  data={imagesData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) =>
                     <TouchableOpacity onPress={() => navigation.navigate(`Details`, { item })}>
                        <ListItem name={item.tags} height={200} url={item.previewURL} marginTop={100} />
                     </TouchableOpacity>
                  }
               />
         </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex:1

   },
   imageWrapper: {
      width: 150,
      height: 220,
      marginBottom: 90,
      margin: 10,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'white',
      justifyContent: 'space-around',
   },
   image: {
      width: '100%',
      height: '60%'
   },
   text: {
      padding: 2
   },
   textWrapper: {
   },
   header: {
      textAlign: 'center',
      fontSize: 22,
      marginTop: 10
   },
   filterWrapper: {
      paddingLeft: 10,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,


   },
   filter: {
      flexDirection: 'row'
   },
   filterItem: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      padding: 4,
      color: colors.light,
      marginRight: 5

   }

});

export default Discovery;