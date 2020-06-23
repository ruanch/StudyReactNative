import React from 'react';
import {Text, View, Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './Shoping/Home/GTHome';
import ShopScreen from './Shoping/Shop/GTShop';
import MineScreen from './Shoping/Mine/GTMine';
import MoreScreen from './Shoping/More/GTMore';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? {uri: 'icon_tabbar_homepage_selected'}
            : {uri: 'icon_tabbar_homepage'};
          return <Image style={{height: 40, width: 40}} source={image} />;
        },
      }),
    },
    Shop: {
      screen: ShopScreen,
      navigationOptions: {
        tabBarLabel: '商店',
        // 配置Icon图标有两种方式，（1）使用图片，我觉得简单（2）使用图标库
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? {uri: 'icon_tabbar_merchant_selected'}
            : {uri: 'icon_tabbar_merchant_normal'};
          return <Image style={{height: 40, width: 40}} source={image} />;
        },
      },
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? {uri: 'icon_tabbar_mine_selected'}
            : {uri: 'icon_tabbar_mine'};
          return <Image style={{height: 40, width: 40}} source={image} />;
        },
      },
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: '更多',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? {uri: 'icon_tabbar_misc_selected'}
            : {uri: 'icon_tabbar_misc'};
          return <Image style={{height: 40, width: 40}} source={image} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true, // 是否显示选项卡的图标
      activeTintColor: 'tomato', // 选中时状态颜色
      inactiveTintColor: 'gray', // 未选中状态颜色
      labelStyle: {
        // 选项卡标签的样式对象
        fontSize: 12,
      },
      style: {
        // 选项卡栏的样式对象
        backgroundColor: 'blue',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
