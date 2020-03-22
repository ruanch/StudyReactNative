import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import HomeScreen from "./src/pages/home/HomePage";
import DetailsScreen from "./src/pages/my/MyPage";
 
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});
 
export default createAppContainer(AppNavigator);