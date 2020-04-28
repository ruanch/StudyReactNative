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
  ListView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';

 


export default class extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  componentWillUnmount() {
    
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      
    }
  }

  _fun() {
    
  }


  
  render() {
   

    return (
      <View style={styles.container}>
          {this._renderItem()}
       </View>
    );
  }

   _renderItem = ()=>{
     let items = [];
     
    let screenWidth = Dimensions.get('window').width;
    let cols = 3,boxW=100,boxH=100;
    let hMargin = (screenWidth - boxW * cols)/(cols + 1);
    let vMargin = 20;
    for(let i =0; i< 9;i++){
       items.push(
         <View key={i+1} style={
           {width:boxW,height:boxH,
           marginBottom:vMargin,marginLeft:hMargin
           ,backgroundColor:'red',alignItems:'center',justifyContent:'center'
           }}>
             <Image style={styles.img} source={require("./img/day1.png")}></Image>
            <Text>i{i}</Text>
         </View>
       )
    }
    return items;
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap'
  },
  item:{
    width:80,
    height:80,
    backgroundColor:'red',
    borderWidth:1,
    borderColor:'#a1a2a3',
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:100,
    height:50,
    resizeMode:'cover'
  }
});
