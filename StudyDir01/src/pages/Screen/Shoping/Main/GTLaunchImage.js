/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
export default class GTMine extends React.Component {
  render() {
    return (
      <Image
        style={{
          flex: 1,
          width:1000,
          height: 500,
        }}
        source={{uri: 'LaunchImage'}}
      />
    );
  }
  //复杂的操作，定时器。网络请求
  componentDidMount() {
    //定时：隔2秒切换到Main
    setTimeout(() => {
      this.props.navigation.push('FastList');
    }, 1000);
  }
}
const styles = StyleSheet.create({});
