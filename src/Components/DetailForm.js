import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, Dimensions, View, Button, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');
const updateUrl = 'http://127.0.0.1:5000/updateProduct';
const deleteUrl = 'http://127.0.0.1:5000/deleteProduct';

const DetailForm = ({route, navigation}) => {

    const [formData, setFormData] = useState({})

    useEffect(() => {
        setFormData(route.params)
    }, [])
    
    const onChange = (e, type) => {
        setFormData({
          ...formData,
          [type]: e.nativeEvent.text,
        });
    };

    const onUpdate = () => {

        const updateData = async(id, formData) => {

            try {
                
                return await fetch(`${updateUrl}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then((response) => response.json())
                .then(() => navigation.goBack())
                .catch(e => console.log(e))
                
            } catch (error) {
                console.log(error);
            }
        
        }

        updateData(formData._id.$oid, formData);

    }

    const onDelete = () => {

        const deleteData = async(id) => {

            try {
        
                return await fetch(`${deleteUrl}/${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                
            } catch (error) {
        
                console.log(error);
                
            }
        
        }
        
        Alert.alert(
            'Warning',
            'Are you sure you want to delete the product?',
            [
                {
                    text:'Delete',
                    onPress: () => deleteData(formData._id.$oid).then(() => navigation.goBack()).catch(e => console.log(e))
                },
                {
                    text:'Cancel',
                    onPress: () => console.log('Cancelled')
                }
            ],
            { cancelable: false }
        )

    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    placeholder='Product Name'
                    style={styles.formInput}
                    value={ (!formData) ? 'Cargando' : formData.productName }
                    onChange={(e) => onChange(e, 'productName')}
                />
                <TextInput 
                    placeholder='Description'
                    style={styles.formInput}
                    value={ (!formData) ? 'Cargando' : formData.description }
                    onChange={(e) => onChange(e, 'description')}
                />
                <TextInput 
                    placeholder='Price'
                    style={styles.formInput}
                    value={ (!formData) ? 'Cargando' : formData.price }
                    onChange={(e) => onChange(e, 'price')}
                />
                <TextInput 
                    placeholder='Date'
                    style={styles.formInput}
                    value={ (!formData) ? 'Cargando' : formData.createAt }
                    onChange={(e) => onChange(e, 'createAt')}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Update'
                        onPress={onUpdate}
                    />
                    <Button 
                        title='Delete'
                        onPress={onDelete}
                    />
                </View>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default DetailForm
