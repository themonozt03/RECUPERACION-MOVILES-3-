import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native'
import CreateForm from '../Components/CreateForm';

const image = { uri: 'https://i.pinimg.com/564x/fe/df/e8/fedfe8064db34d6be26baf07ae552ee5.jpg' };

const CreateProduct = ({navigation}) => {
    return (
        <ImageBackground source={image} style={style.image}>
            <View style={style.container}>
                <CreateForm navigation={navigation}/>
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

export default CreateProduct
