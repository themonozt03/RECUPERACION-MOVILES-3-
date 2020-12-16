import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Dimensions, Alert } from 'react-native'

const { width, height } = Dimensions.get('window');
const postUrl = 'http://127.0.0.1:5000/addProduct';

const CreateForm = ({navigation}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e, type) => {
        setFormData({
          ...formData,
          [type]: e.nativeEvent.text,
        });
    };

    const sendData = async(formData) => {

        try {
            
            return await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            
    
        } catch (error) {
            console.log(error);
        }
    
    }

    const onSubmit = () => {

        if(!formData.productName || !formData.description || !formData.price) {
            Alert.alert('Warning', 'Please fill the entire form')
        } 
        else if(isNaN(formData.price)){
            Alert.alert('Warning', 'You must enter a numeric value in the price')
        }
        else {
            sendData(formData) 
                .then(() => {
                    navigation.navigate('ProductList')
                })
                .catch((e) => {
                    console.log(e);
                })
        }

    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    placeholder='Product Name'
                    style={styles.formInput}
                    onChange={(e) => onChange(e, 'productName')}
                />
                <TextInput 
                    placeholder='Description'
                    style={styles.formInput}
                    onChange={(e) => onChange(e, 'description')}
                />
                <TextInput 
                    placeholder='Price'
                    style={styles.formInput}
                    onChange={(e) => onChange(e, 'price')}
                />
                <TextInput 
                    placeholder='Date'
                    style={styles.formInput}
                    onChange={(e) => onChange(e, 'createAt')}
                />
                <Button 
                    title='Create Product'
                    onPress={onSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.4,
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formInput: {
        margin: 10,
        padding: 10,
        height: 50,
        width: 300,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'lightgray'
    }
})

export default CreateForm
