/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class GTHomeBottomCell extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          alert(122);
        }}>
        <View style={styles.container}>
          {/*左边 */}
          <View style={styles.leftViewStyle}>
            <Image
              source={{uri: this.props.leftIcon}}
              style={{width: 23, height: 23, marginRight: 10, marginLeft: 10}}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                height: 22,
                marginTop: 4,
              }}>
              {this.props.leftTitle}
            </Text>
          </View>
          {/*右边*/}
          <View style={styles.rightViewStyle}>
            <Text style={{height: 22, marginRight: 10, marginTop: 4}}>
              {this.props.rightTitle}
            </Text>
            <Image
              source={{uri: 'icon_cell_rightArrow'}}
              style={{width: 8, height: 13, marginRight: 8}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: '#e5e5e5',
    borderTopWidth: 1,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
  },
  leftViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
