/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Cell from './GTCell';
import {ScrollView} from 'react-native-gesture-handler';
export default class GTMore extends React.Component {
  render() {
    return (
      <View>
        {this.renderNavBar()}
        <ScrollView>
          <View style={styles.cellSectionPre}>
            <Cell title="扫一扫" isSwitch={false} />
          </View>

          <View style={styles.cellSectionPre}>
            <Cell title="省流量模式" isSwitch={true} />
            <Cell title="邀请提醒" isSwitch={false} />
            <Cell title="邀请好友使用码团" isSwitch={false} />
            <Cell title="清空缓存" isSwitch={false} rightTitle="19.9M" />
          </View>
          <View style={styles.cellSectionPre}>
            <Cell title="扫一扫" isSwitch={false} />
            <Cell title="扫一扫" isSwitch={false} />
            <Cell title="扫一扫" isSwitch={false} />
          </View>
        </ScrollView>
      </View>
    );
  }
  renderNavBar() {
    return (
      <View style={styles.navHeaderStyle}>
        <Text style={styles.navText}>更多</Text>
        <TouchableOpacity
          onPress={() => {
            alert('点了');
          }}
          style={{position: 'absolute', right: 10}}>
          <Image
            source={{uri: 'icon_mine_setting'}}
            style={styles.navBarImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navHeaderStyle: {
    height: Platform.OS == 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {fontSize: 24, color: 'white'},
  navBarImage: {
    width: 28,
    height: 28,
  },
  cellSectionPre: {
    marginTop: 20,
  },
});
