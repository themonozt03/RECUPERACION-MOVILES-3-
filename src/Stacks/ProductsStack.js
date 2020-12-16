import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListProducts from '../Screens/ListProducts';
import ProductDetail from '../Screens/ProductDetail';

const ProductNavigator = createStackNavigator();

const ProductsStack = () => {
    return (
        <ProductNavigator.Navigator>
            <ProductNavigator.Screen name="ProductList" component={ListProducts} />
            <ProductNavigator.Screen name="Details" component={ProductDetail} />
        </ProductNavigator.Navigator>
    )
}

export default ProductsStack;