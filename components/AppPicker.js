import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { colors } from '../assets/colors';
import PickerItem from '../components/PickerItem'


const categoryData = [
    { categoryName: 'Pizza', id: 1, icon: 'pizza' },
    { categoryName: 'Sushi', id: 2, icon: 'bonfire' },
    { categoryName: 'Burger', id: 3, icon: 'logo-buffer' },
    { categoryName: 'Alcoholic drink', id: 4, icon: 'beer' },
    { categoryName: 'Burger', id: 5, icon: 'pizza' },
    { categoryName: 'Burger', id: 6, icon: 'logo-buffer' },

]

function AppPicker({ icon, numberOfColumns,category,setCategory }) {
    const [modalState, setModalState] = useState(false)


    const chooseCategory = (name) => {
        setCategory(name),
            setModalState(false);
    }
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => setModalState(true)}>
                <View style={styles.iconWrapper}>
                    <Icon name={icon} size={20} color={colors.dark} />
                    <Text>{category}</Text>
                    <Icon name='chevron-down' size={20} />
                </View>
            </TouchableOpacity>

            <Modal visible={modalState}
                animationType="slide">
                <Button title='Close' onPress={() => setModalState(false)} />
                <View style={styles.categoriesWrapper}>
                    <FlatList
                        data={categoryData}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) =>
                            <PickerItem
                                name={item.categoryName}
                                icon={item.icon}
                                onPress={(name) => chooseCategory(name)}
                            />}
                    />
                </View>

            </Modal>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        justifyContent: 'center',
        height:'100%'
    },
    iconWrapper: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    categoriesWrapper:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:colors.primary,
        flex:1
    }
});

export default AppPicker;