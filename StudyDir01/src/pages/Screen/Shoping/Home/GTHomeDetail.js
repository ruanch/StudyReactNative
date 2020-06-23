/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import WebView from 'react-native-webview';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
export default class GTShop extends React.Component {
  render() {
    const {detailUrl} = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        {this.renderNavBar()}
        <WebView
          automaticallyAdjustContentInsets={true}
          source={{uri: 'http://www.baidu.com'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
      </View>
    );
  }

  renderNavBar() {
    return (
      <View style={styles.navHeaderStyle}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.pop();
          }}
          style={{position: 'absolute', left: 10}}>
          <Image
            source={{uri: 'icon_camera_back_normal'}}
            style={styles.navBarLeftImage}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>更多</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.pop();
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
// eslint-disable-next-line no-unused-vars
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
