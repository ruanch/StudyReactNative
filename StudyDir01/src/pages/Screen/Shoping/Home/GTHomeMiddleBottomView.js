/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CommonView from './GTHomeMiddleCommonView';
var Home_D4 = require('../LocalData/XMG_Home_D4.json');
export default class GTHomeMiddleBottomView extends React.Component {
  render() {
    return (
      <View>
        {/*上半部分 */}
        <View style={styles.topViewStyle} />
        {/*下半部分 */}
        <View style={styles.bottomViewStyle}>{this.renderBottomItem()}</View>
      </View>
    );
  }
  renderBottomItem = () => {
    var itemArr = [];
    var dataArr = Home_D4.data;
    for (var i = 0; i < dataArr.length; i++) {
      var itemData = dataArr[i];
      itemArr.push(
        <CommonView
          title={itemData.maintitle}
          subTitle={itemData.deputytitle}
          rightIcon={this.dealWithImgUrl(itemData.imageurl)}
          titleColor={itemData.typeface_color}
          key={i}
        />,
      );
    }
    console.log(itemArr);
    return itemArr;
  };

  dealWithImgUrl = (url)=>{
    if(url.search('w.h') == -1){
      return url;
    }else{
      return url.replace('w.h','120.90');
    }
  }

}
const styles = StyleSheet.create({
  topViewStyle: {},
  bottomViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
