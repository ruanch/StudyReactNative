/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Day 11
 *
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Image, Navigator} from 'react-native';
/**----导入外部的组件导航类---- */
import TabNavigator from 'react-native-tab-navigator';

import Home from './Shoping/Home/GTHome';
import Shop from './Shoping/Shop/GTShop';
import Mine from './Shoping/Mine/GTMine';
import More from './Shoping/More/GTMore';
// var Home = require('./Shoping/Home/GTHome');
// var Shop = require('./Shoping/Shop/GTShop');
// var Mine = require('./Shoping/Mine/GTMine');
// var More = require('./Shoping/More/GTMore');

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <TabNavigator>
        {/*--首页--*/}
        <TabNavigator.Item
          onPress={() => this.setState({selectedTab: 'home'})}
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} />}
          //style={styles.iconStyle}
          renderSelectedIcon={() => (
            <Image source={{uri: 'icon_tabbar_homepage_selected'}} />
          )}>
          <Navigator
            initialRoute={{name: '首页', component: Home}}
            configureScene={() => {
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />;
            }}
          />
        </TabNavigator.Item>

        {/*--商家--*/}
        <TabNavigator.Item
          title="商家"
          renderIcon={() => (
            <Image source={{uri: 'icon_tabbar_merchant_normal'}} />
          )}
          //style={styles.iconStyle}
          renderSelectedIcon={() => (
            <Image source={{uri: 'icon_tabbar_merchant_selected'}} />
          )}
          onPress={() => this.setState({selectedTab: 'shop'})}
          selected={this.state.selectedTab === 'shop'}>
          <Shop />
        </TabNavigator.Item>

        {/*--我的--*/}
        <TabNavigator.Item
          title="我的"
          renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} />}
          //style={styles.iconStyle}
          renderSelectedIcon={() => (
            <Image source={{uri: 'icon_tabbar_mine_selected'}} />
          )}
          onPress={() => this.setState({selectedTab: 'mine'})}
          selected={this.state.selectedTab === 'mine'}>
          <Mine />
        </TabNavigator.Item>

        {/*--更多--*/}
        <TabNavigator.Item
          title="更多"
          renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} />}
          //style={styles.iconStyle}
          renderSelectedIcon={() => (
            <Image source={{uri: 'icon_tabbar_misc_selected'}} />
          )}
          onPress={() => this.setState({selectedTab: 'more'})}
          selected={this.state.selectedTab === 'more'}>
          <More />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#a1a2a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 50,
    resizeMode: 'cover',
  },
});
