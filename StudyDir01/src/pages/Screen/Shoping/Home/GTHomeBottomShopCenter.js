/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Header from './GTHomeBottomCell';
import {TouchableOpacity} from 'react-native-gesture-handler';
var Home_D5 = require('../LocalData/XMG_Home_D5.json');
export default class GTHomeBottomShopCenter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header leftIcon="gw" leftTitle="购物中心" rightTitle="全部4家" />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.renderItems()}
        </ScrollView>
      </View>
    );
  }
  renderItems = () => {
    var shopData = Home_D5.data;
    var itemArr = [];
   
    for (var i = 0; i < shopData.length; i++) {
      var data = shopData[i];
      itemArr.push(
        <GTHomeBottomShopCenterItem
          shopImage={data.img}
          shopSale={data.showtext.text}
          shopName={data.name}
          detailUrl={data.detailurl}
          key={i}
          navigate={this.props.navigate}
        />,
      );
    }
    return itemArr;
  };
}
class GTHomeBottomShopCenterItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          var url = this.props.detailUrl;
          console.log(url);
          if (url == null) {
            return;
          }
          this.props.navigate.push('HomeDetail', {detailUrl: url});
        }}>
        <View style={styles.itemStyle}>
          <Image
            source={{uri: this.props.shopImage}}
            style={styles.imageStyle}
          />
          <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
          <Text>{this.props.shopName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#ffffff',
  },
  imageStyle: {
    width: 120,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  itemStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopSaleStyle: {
    position: 'absolute',
    left: 8,
    bottom: 30,
    backgroundColor: 'red',
    color: 'white',
    padding: 3,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
