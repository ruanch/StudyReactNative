import * as React from 'react';
import { View, Text ,Button } from 'react-native';
 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/pages/Screen/HomeScreen'
import DetailsScreen from './src/pages/Screen/DetailsScreen'
import ProfileScreen from './src/pages/Screen/ProfileScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);
function App() {
  return <AppContainer />;
}
export default App;