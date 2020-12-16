import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateProduct from '../Screens/CreateProduct';

const ScheduleNavigator = createStackNavigator();

const CreateProductsStack = () => {
    return (
        <ScheduleNavigator.Navigator>
            <ScheduleNavigator.Screen name="Create" component={CreateProduct} />
        </ScheduleNavigator.Navigator>
    )
}

export default CreateProductsStack;