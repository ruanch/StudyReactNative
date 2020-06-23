/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
export default class GTCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      rightTitle: props.rightTitle,
    };
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          alert('123');
        }}>
        <View style={styles.container}>
          {/*左边 */}
          <Text style={styles.leftText}>{this.props.title}</Text>
          {/*右边 */}
          {this._renderRightView()}
        </View>
      </TouchableOpacity>
    );
  }

  _renderRightView = () => {
    if (this.props.isSwitch) {
      return (
        <Switch
          value={this.state.isOn === true}
          style={{marginRight: 8}}
          onValueChange={() => {
            this.setState({
              isOn: !this.state.isOn,
              rightTitle: '',
            });
          }}
        />
      );
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          {this._renderRightTitle()}
          <Image
            source={{uri: 'icon_cell_rightArrow'}}
            style={{width: 8, height: 13, marginRight: 20}}
          />
        </View>
      );
    }
  };

  _renderRightTitle = () => {
    if (this.props.rightTitle != null) {
      return <Text style={{marginRight: 20}}>{this.props.rightTitle}</Text>;
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 44,
    backgroundColor: 'white',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    marginLeft: 20,
  },
});
