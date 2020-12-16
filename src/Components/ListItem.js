import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const ListItem = ({data, images}) => {

    const { productName, description, price, createAt } = data
    const randomImage = Math.floor(Math.random() * images.length);
    //INTENTE RECORRER UN RANDOM EN EL ARRAY PERO NO FUNCIONA

    return (
        <View style={style.container}>
            <View style={style.insideContainer}>
                <View style={style.imageStyle}>
                    <Image 
                        source={require(`../../assets/img/${1}.jpg`)}
                        style={style.image}
                    />
                </View>
                <View style={style.infoStyle}>
                    <Text>Product Name: {productName}</Text>
                    <Text>Description: {description}</Text>
                    <Text>Price: {price}</Text>
                    <Text>Create At: {createAt}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 200,
        width: width * .95,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    insideContainer: {
        flexDirection: 'row'
    },
    imageStyle: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150, 
        width: 150,
        borderRadius: 50
    },
    infoStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})

export default ListItem
