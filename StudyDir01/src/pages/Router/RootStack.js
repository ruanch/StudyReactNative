import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Screen/HomeScreen';
import DetailsScreen from '../Screen/DetailsScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import FastListScreen from '../Screen/FastListScreen';
import WebScreen from '../Screen/WebScreen';
import BuildIos from '../Screen/Study/BuildIos';
import BuildAndroid from '../Screen/Study/BuildAndroid';
import Day01 from '../Screen/Day01';
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Profile: ProfileScreen,
    FastList: FastListScreen,
    Web: WebScreen,
    BuildIos: BuildIos,
    BuildAndroid: BuildAndroid,
    Day01: Day01,
  },
  {
    initialRouteName: 'FastList',
  },
);
export const AppContainer = createAppContainer(RootStack);
