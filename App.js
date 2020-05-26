
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from "react-native";
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';

export default class App extends React.Component{
  render() {
    return ( 
      <View style={StyleSheet.container}>
        <Text>map </Text>
        <MapView style={styles.map}
        region={{
          latitude: 59.3293232349999999,
          longitude: 18,
          latitudeDelta: 0.1,
          longitudeDelta:0.1
        }}>

        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0, 
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }, 
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
/*
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    margin: 5,
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function App() {

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
          margin: 20
        }}
      >


        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

      </View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >

        <Text style={{
          margin: 20
        }}>Hello World!</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 20,
          height: 100,
          padding: 20
        }}
      >
        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{
          margin: 20
        }}>Hello World!</Text>
      </View>


    </View>

  );


  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
          margin: 20
        }}
      >


        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

      </View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >



        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

    </View>

  );
}


*/
/*
import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Button,
  Linking,
  AppState
} from 'react-native';
import Constants from 'expo-constants';
import Location from 'expo-location';
import Permissions from 'expo-permissions';
import {IntentLauncherAndroid } from 'expo';
import Modal from 'react-native-modal';
export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
    isLocationModalVisible: false,
    appState: AppState.currentState
  };

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      this._getLocationAsync();
    }
    this.setState({ appState: nextAppState });
  };

  componentWillMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied'
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    } catch (error) {
      let status = Location.getProviderStatusAsync();
      if (!status.locationServicesEnabled) {
        this.setState({ isLocationModalVisible: true });
      }
    }
  };

  openSetting = () => {
    if (Platform.OS == 'ios') {
      Linking.openURL('app-settings:');
    } else {
      IntentLauncherAndroid.startActivityAsync(
        IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
      );
    }
    this.setState({ openSetting: false });
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <Modal
          onModalHide={this.state.openSetting ? this.openSetting : undefined}
          isVisible={this.state.isLocationModalVisible}
        >
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button
              onPress={() =>
                this.setState({
                  isLocationModalVisible: false,
                  openSetting: true
                })
              }
              title="Enable Location Services"
            />
          </View>
        </Modal>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  }
});
*/
/*
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/
