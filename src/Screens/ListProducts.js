import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';
import ListItem from '../Components/ListItem';

const { width, height } = Dimensions.get('window');
const getDataUrl = 'http://127.0.0.1:5000/getProducts';
const images = [
    '../../assets/img/1.jpg',
    '../../assets/img/2.jpg',
    '../../assets/img/3.jpg',
    '../../assets/img/4.jpg',
    '../../assets/img/5.jpg',
    '../../assets/img/6.jpg',
    '../../assets/img/7.jpg',
    '../../assets/img/8.jpg',
    '../../assets/img/9.jpg',
    '../../assets/img/10.jpg',
]

const ListProducts = ({navigation}) => {

    const [productData, setProductData] = useState(null)

    useEffect(() => {

        const getData = async() => {
            await fetch (getDataUrl)
                .then(response => response.json())
                .then(data => setProductData(data))
                .catch(e => console.log(e))
        }

        getData()

        const interval=setInterval(()=>{
            getData()
        },5000)
             
        return()=>clearInterval(interval)
       
    }, [])

    return (
        <View style={style.listContainer}>
            {
                (!productData)
                    ? <Text>Cargando..</Text>
                    : <FlatList
                        data={productData.products}
                        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Details', item)}><ListItem data={item} images={images}/></TouchableOpacity>}
                        keyExtractor={item => item._id.$oid}
                        >
                    </FlatList>
                        
            }
        </View>
    )
}

const style = StyleSheet.create({
    listContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})

export default ListProducts;