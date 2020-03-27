import React from 'react';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';
  
export default class HomeScreen extends React.Component {  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.push('Profile')}  
                />  
            </View>  
        );  
    }  
}  