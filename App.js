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
  Button,
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
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: 'green'
          },
          headerTintColor: 'white',
            headerTitleStyle:{
              fontWeight: 'bold'
            }
        }}>
          <Stack.Screen name="Home" options={{
            title: 'My Home',
            headerRight: () => {
               return <Button  title="Info from App" color="white"
                        onPress={()=> alert('this is a button!')}/>
            },
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: 'black',
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}>
            { props => <HomeScreen {...props}/>}
            </Stack.Screen> 
          <Stack.Screen name="Details" component={DetailsScreen} 
             options={({route}) => ({title: route.params.title})}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


