/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import CommonView from './GTHomeMiddleCommonView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MiddleBottom from './GTHomeMiddleBottomView';
var TopMiddleData = require('../LocalData/HomeTopMiddleLeft.json');
var {width} = Dimensions.get('window');
export default class GTHomeMiddle extends React.Component {
  render() {
    return (
      <View style={styles.middleStyle}>
        {/*左边*/}
        {this.renderLeftView()}
        {/*右边 */}
        <View style={styles.rightStyle}>{this.renderRightView()}</View>
        <View
          style={{
            marginTop: 15,
            width: width,
            height: 100,
          }}>
          <MiddleBottom />
        </View>
      </View>
    );
  }
  renderLeftView = () => {
    var data = TopMiddleData.dataLeft[0];
    return (
      <TouchableOpacity
        onPress={() => {
          alert(1111);
        }}>
        <View style={styles.leftViewStyle}>
          <Image source={{uri: data.img1}} style={styles.leftImageStyle} />
          <Image source={{uri: data.img2}} style={styles.leftImageStyle} />
          <Text style={{color: 'gray'}}>{data.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'red', marginRight: 5}}>{data.price}</Text>
            <Text style={{color: 'orange'}}>{data.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  renderRightView = () => {
    var itemArr = [];
    var rightData = TopMiddleData.dataRight;
    for (var i = 0; i < rightData.length; i++) {
      var data = rightData[i];
      itemArr.push(
        <CommonView
          rightIcon={data.rightImage}
          titleColor={data.titleColor}
          title={data.title}
          subTitle={data.subTitle}
          key={i}
        />,
      );
    }

    return itemArr;
  };
}
const styles = StyleSheet.create({
  middleStyle: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightStyle: {},
  leftViewStyle: {
    width: width * 0.5,
    height: 119,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftImageStyle: {
    width: 120,
    height: 30,
    //内容模式
    resizeMode: 'contain',
  },
});
