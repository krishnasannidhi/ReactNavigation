import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}){
    navigation.setOptions({
        headerRight: () =>  (
            <Button title="from Home" 
                onPress={()=> {
                    alert("from home")
                }}/>
        )
    })
    return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>
                Home Screen
            </Text>
            <Button title="Update Home Header"
                onPress={() => {
                    navigation.setOptions({title: 'updated from Home screen'})
                }} />
            <Button title="Go to Details" 
                onPress={()=> {
                    navigation.navigate('Details', {
                        itemId:123,
                        otherParam: 'from Home screen',
                        title: 'Details Header from Home Screen'
                    })
                    }}>
            </Button>
        </View>
    )
}