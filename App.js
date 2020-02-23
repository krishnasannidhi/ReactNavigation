/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./components/homeScreen";
import DetailsScreen from "./components/detailsScreen";

const Stack = createStackNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}>
            </Stack.Screen> 
          <Stack.Screen name="Details" component={DetailsScreen}  options={{title: 'Details Overview'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


