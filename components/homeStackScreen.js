import React from 'react';
import {createStackNavigator} from  '@react-navigation/stack';
import HomeScreen from './homeScreen';
import DetailsScreen from './detailsScreen';

const Stack = createStackNavigator();

export default function HomeStackScreen(){
    return  (
        <Stack.Navigator>
            <Stack.Screen   name="Home" component={HomeScreen} />
            <Stack.Screen name="Details"  component={DetailsScreen} />
        </Stack.Navigator>
    )
}