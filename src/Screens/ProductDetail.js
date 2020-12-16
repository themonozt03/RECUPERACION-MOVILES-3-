import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native'
import DetailForm from '../Components/DetailForm';

const image = { uri: 'https://i.pinimg.com/564x/97/bb/da/97bbda124df21d7ba464fc3e32b471d6.jpg' };

const ProductDetail = ({ route, navigation }) => {

    return (
        <ImageBackground source={image} style={style.image}>
            <View style={style.container}>
                <DetailForm route={route} navigation={navigation} />
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})


export default ProductDetail;