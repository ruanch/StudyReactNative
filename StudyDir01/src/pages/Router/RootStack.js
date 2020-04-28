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
import Day02 from '../Screen/Day02';
import Day03 from '../Screen/Day03';
import Day05 from '../Screen/Day05';
 
import Day07 from '../Screen/Day07';
import Day08 from '../Screen/Day08';
import Day09 from '../Screen/Day09';
import Day10 from '../Screen/Day10';
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
    Day02: Day02,
    Day03: Day03,
    Day05: Day05,
    Day07: Day07,
    Day08: Day08,
    Day09: Day09,
    Day10: Day10,
  },
  {
    initialRouteName: 'FastList',
  },
);
export const AppContainer = createAppContainer(RootStack);
