/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Touch,
  Button
} from 'react-native';



/**
 * ES5 写法 - 方式二
 */
// var App = React.createClass({
//   render(){
//     return <Text>Hello ES5写法</Text>
//   }
// });
// module.exports = App;

/**
 * 函数式 写法 - 方式三
 * 无状态 ，不能使用this
 */
// function App(props){
//   return <Text>函数式的写法</Text>; 
// } 
// module.exports = App;

//ES6写法
/**
 * 推荐写法
 */
export default class App extends Component { 
    render(){
       return <View>
       <Button onPress={()=>{}} title="开发环境-IOS"color="#841584"/>
       <Button onPress={()=>{}} title="开发环境-Window"color="#441584"/>
       <Button onPress={()=>{}} title="ES6的学习"color="#341584"/>
       <Button onPress={()=>{}} title="ES7的学习"color="#321584"/>
       <Button onPress={()=>{}} title="ES8的学习"color="#141584"/>
      </View>
      }
      

      
};
 
