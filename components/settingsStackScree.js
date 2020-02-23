import React from 'react';
import {createStackNavigator} from  '@react-navigation/stack';
import DetailsScreen from './detailsScreen';
import SettingsScreen from './settingsScreen';

const Stack = createStackNavigator();

export default function SettingsStackScreen(){
    return  (
        <Stack.Navigator>
            <Stack.Screen   name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Details"  component={DetailsScreen} />
        </Stack.Navigator>
    )
}