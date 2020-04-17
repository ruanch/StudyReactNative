/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Day 7
 * 
 */
'use strict';

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
 
  View,
} from 'react-native';


import {Text, Input } from 'react-native-elements';
export default class  Day07 extends Component {
  constructor() {
    super();
    this.state = {
        name:null,
    };
  }

  _onInputChange(val) {
    this.setState({
        name:val
    });
  }

  render() {
    return (
         <View style={{flex:1,justifyContent:'center'}}>
          <Text>React-native-elements</Text>
          <Text style={{fontSize:44,textAlign:'center'}}>{this.state.name}</Text>
          <Text>Filed</Text>
          <Input onChangeText={this._onInputChange.bind(this)}></Input> 
       </View>
    );
  }
};

const styles = StyleSheet.create({
  
});
