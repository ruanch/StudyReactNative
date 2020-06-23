/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {TouchableOpacity} from 'react-native-gesture-handler';
var {width} = Dimensions.get('window');
export default class GTHomeTopListView extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.dataArr),
    };
  }
  render() {
    return (
      <ListView
        scrollEnabled={false}
        contentContainerStyle={styles.listViewStyle}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow = rowData => {
    return (
      <TouchableOpacity
        onPress={() => {
          alert('click');
        }}>
        <View style={styles.cellStyle}>
          <Image
            source={{uri: rowData.image}}
            style={{width: 52, height: 52}}
          />
          <Text>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}
const styles = StyleSheet.create({
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    backgroundColor: 'white',
  },
  cellStyle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: (width - 70 * 5) / (5 + 1),
  },
});
