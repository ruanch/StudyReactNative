/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TopMenu from './GTHomeTopListView';

var TopMenuData = require('../LocalData/TopMenu.json');
var {width} = Dimensions.get('window');

export default class GTHomeTop extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 0,
    };
  }

  render() {
    return (
      <View>
        {/*内容部分 */}
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.onAnimationEnd}>
          {this.renderTopItemView()}
        </ScrollView>
        {/*页码部分 */}
        <View style={styles.indicatorViewStyle}>{this.renderIndicator()}</View>
      </View>
    );
  }
  renderTopItemView = () => {
    var itemArr = [];
    var data = TopMenuData.data;

    for (var j = 0; j < data.length; j++) {
      itemArr.push(<TopMenu dataArr={data[j]} />);
    }
    //console.log(itemArr);
    return itemArr;
  };
  renderIndicator = () => {
    var itemArr = [],
      style;
    for (var i = 0; i < 2; i++) {
      style = i === this.state.activePage ? {color: 'orange'} : {color: 'gray'};
      itemArr.push(<Text style={[{fontSize: 35}, style]}>&bull;</Text>);
    }
    return itemArr;
  };

  onAnimationEnd = e => {
    // 求出水平方向上的偏移量
    var offSetX = e.nativeEvent.contentOffset.x;
    // 计算当前页码
    var currentPage = offSetX / width;
    // 重新绘制UI
    this.setState({
      activePage: currentPage,
    });
  };
}
const styles = StyleSheet.create({
  indicatorViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
