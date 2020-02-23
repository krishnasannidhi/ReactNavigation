import React from 'react';
import {View, Text, Button} from 'react-native';

export default function SettingsScreen({navigation}){
    return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text> Settings Screen</Text>
            <Button title="Go  to Details"
            onPress={() => {
                    navigation.navigate('Details',{
                        itemId: 456,
                        otherParam: 'From Seetings  Screen'
                    })
            }}/>
        </View>
    )
}