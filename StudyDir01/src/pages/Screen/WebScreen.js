import React from 'react';  
import { View, StyleSheet } from 'react-native';  
import { WebView } from "react-native-webview";
var DEFAULT_URL = "http://www.baidu.com";
export default class WebScreen extends React.Component {  
  static navigationOptions = {  
      title: 'Web',  
      headerStyle: {  
          backgroundColor: '#f4511e',  
      },  
      headerTintColor: '#0ff',  
      headerTitleStyle: {  
          fontWeight: 'bold',  
      },  
  };  
  constructor(props) {
    super(props);
    this.state = {
      url: DEFAULT_URL
    }
  }
  render() {  
      return (  
          <View style={{ flex: 1 }}>  
              <WebView
        source={{ uri: "http://www.baidu.com" }}
        style={{flex:1}}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
          </View>  
  );  
  }  
}  
 