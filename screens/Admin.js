import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Keyboard } from 'react-native';
import { colors } from '../assets/colors';
import AppButton from '../components/AppButton';
import CustomInput from '../components/CustomInput';
import ImagePicker from '../components/ImagePicker';
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';
import useProduct from '../hooks/useProduct'
import { useStateValue } from '../StateProvider'
import ProductItemDeleteAction from '../components/ProductItemDeleteAction'
import CategoryPicker from '../components/CategoryPicker';

function Admin(props) {
    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [imageUri, setImageUri] = React.useState('')
    const { addProduct, getProducts, deleteProduct, updateProduct } = useProduct();
    const [{ products, loading }] = useStateValue();
    const [category, setCategory] = React.useState('');
    const [isEditAction, setIsEditAction] = React.useState(false);
    const [id, setId] = React.useState('')

    useEffect(() => {
        getProducts()
    }, [])

    const uploadProduct = async () => {
        if (title && price && imageUri && category) {
            if (isEditAction) await updateProduct(title, price, imageUri, id, category)
            else await addProduct(title, price, imageUri, category)
        }
        reset();
    }

    const reset = () => {
        if (isEditAction) {
            setIsEditAction(false)
        }
        setTitle('');
        setPrice('')
        setImageUri('');
        setCategory('')
        setId('')
        Keyboard.dismiss()
    }

    const chooseProduct = (product) => {
        setIsEditAction(true)
        setTitle(product.title);
        setPrice(product.price);
        setImageUri(product.photoURL);
        setCategory(product.category)
        setId(product.id)
    }

    return (
        <View style={styles.container}>
            <Separator />
            <CustomInput title='Product title' placeholder='Product title' onChange={(text) => setTitle(text)} value={title} />
            <CustomInput title='Product price' placeholder='Product price' onChange={(text) => setPrice(text)} value={price} />
            <Separator height={20} />
            <CategoryPicker icon='list' numberOfColumns={3} category={category} setCategory={setCategory} />
            <Separator />
            <ImagePicker imageUri={imageUri} setImageUri={setImageUri} />
            <Separator height={20} />
            <AppButton title={isEditAction ? 'Edit action' : 'Add Product'} onPress={uploadProduct} />
            <Separator />
            <View style={{ width: '100%', flex: 1, padding: 20 }}>
                {loading ? <ActivityIndicator size="large" color={colors.primary} /> :
                    <FlatList
                        data={products}
                        renderItem={({ item }) =>
                            <ProductItem
                                onPress={(product) => chooseProduct(product)}
                                item={item}
                                title={item.title}
                                price={item.price}
                                keyExtractor={(item) => item.id}
                                imageUri={item.photoURL}
                                renderRightActions={() => <ProductItemDeleteAction onPress={() => deleteProduct(item.id)} />}
                                style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    borderRadius: 5,
                                    width: '100%',
                                    height: 50,
                                    backgroundColor: 'white',
                                    overflow: 'hidden',
                                }}
                                imageStyle={{
                                    width: 100,
                                    height: '100%',
                                }}
                            />

                        }
                        keyExtractor={(item, index) => item.key}
                        ItemSeparatorComponent={() => <Separator height={20} />}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
        padding: 20,
    }
});

export default Admin;