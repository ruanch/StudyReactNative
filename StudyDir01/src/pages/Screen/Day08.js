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
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import {ListItem} from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo




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
   
    const arr = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
      ]  

      const item1 =  
        arr.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          />
        ));

        

        const item2= ({ item }) => (
          <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
          />
        )
        
        const item3  = ({ item }) => (
            <ListItem
              title={item.name}
              subtitle={item.subtitle}
              leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
                title: item.name[0]
              }}
              bottomDivider
              chevron
            />
          )
         const item4 =  ({ item }) => (
         <ListItem
         Component={TouchableScale}
         friction={90} //
         tension={100} // These props are passed to the parent component (here TouchableScale)
         activeScale={0.95} //
         linearGradientProps={{
           colors: ['#FF9800', '#F44336'],
           start: [1, 0],
           end: [0.2, 0],
         }}
         ViewComponent={LinearGradient} // Only if no expo
         leftAvatar={{ rounded: true, source: { uri: item.avatar_url } }}
         title="Chris Jackson"
         titleStyle={{ color: 'white', fontWeight: 'bold' }}
         subtitleStyle={{ color: 'white' }}
         subtitle="Vice Chairman"
         chevron={{ color: 'white' }}
       />);

    return (
      <View>
          {item1}
          <FlatList 
            data={arr}
            renderItem = {item2}
          >
          </FlatList>
          <FlatList 
            data={arr}
            renderItem = {item3}
          >
          </FlatList>
         
       </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
