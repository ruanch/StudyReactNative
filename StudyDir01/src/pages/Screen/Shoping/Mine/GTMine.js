/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Cell from './GTMineCell';
import Order from './GTMineOrder';
import Top from './GTMineTop';
export default class GTMine extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cellMarginTop}>
          <Top />
          <Cell
            leftIconName="collect"
            leftTitle="我的订单"
            rightTitle="查看全部订单"
          />
          <Order />
        </View>
        <View style={styles.cellMarginTop}>
          <Cell
            leftIconName="draft"
            leftTitle="钱包"
            rightTitle="账户余额：￥100"
          />
          <Cell leftIconName="like" leftTitle="抵用券" rightTitle="0" />
        </View>
        <View style={styles.cellMarginTop}>
          <Cell leftIconName="card" leftTitle="积分商城" />
        </View>
        <View style={styles.cellMarginTop}>
          <Cell leftIconName="new_friend" leftTitle="今日推荐" />
        </View>
        <View style={styles.cellMarginTop}>
          <Cell leftIconName="pay" leftTitle="我要合作" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cellMarginTop: {
    marginTop: 15,
  },
  container: {
    backgroundColor: '#e8e8e8',
  },
});
