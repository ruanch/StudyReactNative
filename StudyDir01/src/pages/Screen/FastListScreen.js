/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

export default class FastListScreen extends Component {
  static navigationOptions = {
    title: 'FastList',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      pushArray: ['BuildIos', 'BuildAndroid', '', '', '', 'Day01', 'Day02'],
    };
  }
  refreshing() {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      //alert('刷新成功')
    }, 500);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_view}>
          <Text style={styles.title_text}>学习React-Native历程</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            ref={flatList => (this._flatList = flatList)}
            onRefresh={this.refreshing}
            refreshing={false}
            ItemSeparatorComponent={this._separator}
            ListHeaderComponent={this._header}
            ListFooterComponent={this._footer}
            data={[
              {key: '开发环境-IOS'},
              {key: '开发环境-Window'},
              {key: 'ES6的学习'},
              {key: 'ES7的学习'},
              {key: 'ES8的学习'},
              {key: 'Day01'},
              {key: 'Day02'},
            ]}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.push(this.state.pushArray[index]);
                }}>
                <Text style={styles.item}>{item.key}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Button
          title="滚动到指定位置"
          onPress={() => {
            this._flatList.scrollToOffset({animated: true, offset: 2000});
          }}
        />
      </View> 
    );
  }
  _header = () => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Text style={[styles.txt, {backgroundColor: 'black'}]}>
        介绍一些小技巧
      </Text>
    );
  };

  _footer = () => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Text style={[styles.txt, {backgroundColor: 'black'}]}>
        更多请看下一个项目
      </Text>
    );
  };
  _separator = () => {
    return <View style={{height: 1, backgroundColor: 'gray'}} />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title_view: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27b5ee',
  },
  title_text: {
    fontSize: 20,
    color: 'white',
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
  },
  list: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
