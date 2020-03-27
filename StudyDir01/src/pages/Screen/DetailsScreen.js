import React from 'react';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';
  
export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Home... again"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }