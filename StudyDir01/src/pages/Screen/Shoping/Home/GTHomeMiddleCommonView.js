/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
var {width} = Dimensions.get('window');
export default class GTHomeMiddleCommonView extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          alert(111);
        }}>
        <View style={styles.itemContainer}>
          {/*左边 */}
          <View>
            <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>
              {this.props.title}
            </Text>
            <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
          </View>
          {/*右边 */}
          <Image
            source={{uri: this.props.rightIcon}}
            style={styles.rightIcon}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: width * 0.5 - 1,
    backgroundColor: 'white',
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitleStyle: {
    color: 'gray',
  },
  rightIcon: {
    width: 64,
    height: 43,
  },
});
