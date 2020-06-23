/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import Top from './GTHomeTop';
import Middle from './GTHomeMiddle';
import Bottom from './GTHomeBottomShopCenter';
import GeustLike from './GTHomeGeustYouLike';
import {SafeAreaView} from 'react-native-safe-area-context';
var {width} = Dimensions.get('window');

export default class GTHome extends React.Component {
  pushDetail = () => {
    this.props.navigation.push('Day01');
  };
  render() {
    return (
      <SafeAreaView style={{marginBottom:24}}>
        {/*顶部导航条 */}
        {this.renderHeaderView()}
        <ScrollView>
          {/*头部滚动列表 */}
          {this.renderTopView()}
          {/*中间展览页 */}
          <Middle />
          {/*购物中心列表 */}
          <Bottom  navigate={this.props.navigation}/>
          <Bottom  navigate={this.props.navigation}/>
          <GeustLike />
        </ScrollView>
      </SafeAreaView>
    );
  }
  renderHeaderView = () => {
    return (
      <View style={styles.navBarStype}>
        {/*左边 */}
        <TouchableOpacity onPress={this.pushDetail}>
          <Text style={styles.cityTextStyle}>广州</Text>
        </TouchableOpacity>
        {/*中间 */}
        <TextInput
          style={styles.topInputStyle}
          placeholder="输入商家，品类，商圈"
        />
        {/*右边 */}
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity
            onPress={() => {
              alert('点了');
            }}>
            <Image
              source={{uri: 'icon_homepage_message'}}
              style={{width: 28, height: 28}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('点了');
            }}>
            <Image
              source={{uri: 'icon_homepage_scan'}}
              style={{width: 28, height: 28}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderTopView = () => {
    return <Top />;
  };
}

const styles = StyleSheet.create({
  navBarStype: {
    height: Platform.OS === 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',
    flexDirection: 'row',
    alignItems: 'center',
    //设置主轴的对齐方式
    justifyContent: 'space-around',
  },

  cityTextStyle: {
    color: 'white',
  },
  topInputStyle: {
    width: width * 0.7,
    height: Platform.OS == 'ios' ? 35 : 30,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 10,
  },
  rightNavViewStyle: {
    flexDirection: 'row',
    height: 40,
    width: 65,
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navRightImgStyle: {
    width: 100,
    height: 100,
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'blue',
  },
  navRightImgStyle: {},
});
