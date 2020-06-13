import React, { Component } from 'react';
import { Button, Linking, View,TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

import { Header } from 'react-native-elements';
import {Icon } from 'native-base';

export default class billeterie extends Component {
  render() {
    return (



        <View>
          <Header
                      leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                      centerComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Home")}>
   
                      <Image style={styles.img} source={require('./../assets/logo.png')} />
                      
                    </TouchableOpacity>} 
                      rightComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Compte")}>
                      <Image
                      style={styles.user}
                      source={require('./../assets/users.png')}
                    />
                    </TouchableOpacity>}
                      containerStyle={{
                          backgroundColor: '#75D2FA',
                          height:100,
                          justifyContent: 'space-around',
                        }}
                  />
  
  
          <View
            style={{
              height: 60,
              width: window.width,
              //75D2FA
              //9DE0FA
      backgroundColor: "#9DE0FA",
            }}
  
  
          >
            <View style={styles.container}>

  <Button
          title="Aller vers la billeterie"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
      </View>
            </View>
  
          
        </View>
        
  
      );

  }

  _handleOpenWithLinking = () => {
    Linking.openURL('https://www.digitick.com/');
  };

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.digitick.com/');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
  },logo: {
    width: 66,
    height: 58,
    margin: 30,
},
img: {
    width: 50 ,
    height: 50,
},
user: {
    width: 50,
    height: 50,
    margin: 30,
},
  header:
  {
    backgroundColor: "#A0123D",
    height: 400,
    tintColor: "#A0123D"
  }
});