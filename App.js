import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductsStack from './src/Stacks/ProductsStack';
import CreateProductsStack from './src/Stacks/CreateProductStack';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen 
          name='Products' 
          component={ProductsStack} 
          options={{
            tabBarLabel: 'Products'
          }}
        />
        <Tab.Screen 
          name='Create' 
          component={CreateProductsStack} 
          options={{
            tabBarLabel: 'Create'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
