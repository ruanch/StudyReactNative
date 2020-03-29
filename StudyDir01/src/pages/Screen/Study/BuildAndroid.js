import React from 'react';  
import { View,Text, StyleSheet } from 'react-native';  
import { ScrollView } from 'react-native-gesture-handler';
 
export default class BuildAndroid extends React.Component {  
  static navigationOptions = {  
      title: '构建Android平台开发环境',  
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
     
    }
  }
  render() {  
      return (  
          <View style={{ flex: 1 }}>  
            <ScrollView>
            <Text>1.安装NodeJs</Text>
                  <Text>在这里http://nodejs.cn/download/ 选择下载，可以选择手动安装和自动安装</Text>
            <Text>2.安装expo</Text>
                  <Text>npm install -g expo-cli</Text>
            <Text>3.安装Android Studio</Text>
                  <Text>在这里下载http://www.android-studio.org/</Text>
            <Text>4.安装Ide</Text>
                  <Text>这里可以选择WebStorm、Visual Studio Code、Sublime等</Text>  
            <Text>5.实战操作</Text>
                  <Text>打开命令行模式输入：expo init MyProject创建一个新的工程</Text>  
                  <Text>创建完后react-native run-ios/run-android运行程序</Text> 
                  <Text>第一个HelloWorld完成</Text>  
            </ScrollView>
          </View>  
  );  
  }  
}  
 