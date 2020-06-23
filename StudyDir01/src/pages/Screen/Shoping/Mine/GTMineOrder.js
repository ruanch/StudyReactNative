/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

var orderItems = require('./OrderItems.json');
export default class GTMineOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      rightTitle: props.rightTitle,
    };
  }
  render() {
    return <View style={styles.container}>{this.renderOrderItems()}</View>;
  }

  renderOrderItems = () => {
    var itemArr = [];
    for (var i = 0; i < orderItems.length; i++) {
      var item = orderItems[i];
      itemArr.push(
        <OrderItem key={i} iconName={item.iconName} orderTitle={item.title} />,
      );
    }
    return itemArr;
  };
}

class OrderItem extends React.Component {
  render() {
    return (
      <View style={styles.itemsView}>
        <Image
          source={{uri: this.props.iconName}}
          style={{width: 30, height: 20, alignItems: 'center'}}
        />
        <Text style={styles.itemText}>{this.props.orderTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftText: {
    marginLeft: 20,
    fontSize: 20,
  },
  leftIcon: {
    width: 35,
    height: 35,
    borderRadius: 18,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemsView: {
    height: 70,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    marginTop: 8,
  },
});
