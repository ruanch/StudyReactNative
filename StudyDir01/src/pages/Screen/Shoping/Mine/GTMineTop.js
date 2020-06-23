/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

var orderItems = require('./OrderItems.json');
var {width} = Dimensions.get('window');

export default class GTMineOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        {/*上半部份 */}
        {this.renderTopView()}
        {/*下半部份 */}
        {this.renderBottomView()}
      </View>
    );
  }

  renderTopView = () => {
    return (
      <View style={styles.topViewStyle}>
        <Image source={{uri: 'see'}} style={styles.leftIconStyle} />
        <View style={styles.centerViewStyle}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            超级电商
          </Text>
          <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}} />
        </View>
        <Image
          source={{uri: 'icon_cell_rightArrow'}}
          style={{
            width: 8,
            height: 17,
            marginRight: 8,
            position: 'absolute',
            right: 10,
          }}
        />
      </View>
    );
  };

  renderBottomView = () => {
    return (
      <View style={styles.bottomViewStyle}>{this.renderBottomItem()}</View>
    );
  };

  renderBottomItem = () => {
    var itemArr = [];
    var data = [
      {number: 100, title: '商城券'},
      {number: 100, title: '评价'},
      {number: 100, title: '收藏'},
    ];
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      itemArr.push(
        <TouchableOpacity
          onPress={() => {
            alert('ok');
          }}>
          <View key={i} style={styles.itemDisplayStyle}>
            <Text style={{color: 'white'}}>{item.number}</Text>
            <Text style={{color: 'white'}}>{item.title}</Text>
          </View>
        </TouchableOpacity>,
      );
    }
    return itemArr;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,96,0,1.0)',
  },
  topViewStyle: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    height: 130,
  },
  leftIconStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#e5e5e5',
    marginLeft: 10,
    marginRight: 10,
  },
  centerViewStyle: {
    flexDirection: 'row',
  },
  bottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  itemDisplayStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3 + 1,
    padding: 5,
    borderRightColor: 'white',
    borderRightWidth: 1,
  },
});
