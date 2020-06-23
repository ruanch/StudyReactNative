/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from './GTHomeBottomCell';
import ListView from 'deprecated-react-native-listview';
var Home_D5 = require('../LocalData/XMG_Home_D5.json');

export default class GTHomeGeustYouLike extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(Home_D5.data),
    };
  }
  componentDidMount() {
    this.loadDataFormNet();
  }
  loadDataFormNet() {
    // fetch(this.state.api_url)
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log(responseData);
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(responseData.data),
    //     });
    //   })
    //   .catch(error => {
    //     alert(error);
    //   });
    //console.log(Home_D5.data);
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(Home_D5.data),
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header leftIcon="cnxh" leftTitle="猜你喜欢" />
        {/**列表 */}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
  renderRow = rowData => {
    console.log(rowData);
    return (
      <TouchableOpacity
        onPress={() => {
          alert(122);
        }}>
        <View style={styles.listViewStyle}>
          {/*左边*/}
          <Image
            source={{uri: this.dealWithImgUrl(rowData.img)}}
            style={styles.imageViewStyle}
          />
          {/*右边*/}
          <View style={styles.rightViewStyle}>
            <View style={styles.rightTopViewStyle}>
              <Text>{rowData.name}</Text>
              <Text>{rowData.showtext.text}</Text>
            </View>
            <Text style={{color: 'gray'}}>{rowData.promotionText}</Text>
            <View style={styles.rightBottomViewStyle}>
              <Text style={{color: 'red'}}>{rowData.promotionText}</Text>
              <Text>{rowData.bottomRightInfo}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  dealWithImgUrl(url) {
    if (url.search('w.h') == -1) {
      // 没有找到,正常返回
      return url;
    } else {
      return url.replace('w.h', '120.90');
    }
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  listViewStyle: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,

    flexDirection: 'row',
  },

  imageViewStyle: {
    width: 120,
    height: 90,
  },

  rightViewStyle: {
    marginLeft: 8,
    width: 220,
    justifyContent: 'center',
  },

  rightTopViewStyle: {
    flexDirection: 'row',
    marginBottom: 7,
    justifyContent: 'space-between',
  },

  rightBottomViewStyle: {
    flexDirection: 'row',
    marginTop: 7,
    justifyContent: 'space-between',
  },
});
