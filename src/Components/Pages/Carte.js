import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Alert,
  ScrollView,
  MapView,
} from "react-native";
import {Icon } from "native-base";
import { Header } from "react-native-elements";
import GoogleMapReact from 'google-map-react';

const window = Dimensions.get("window");
const { height } = Dimensions.get("window");
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: "blue",
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#EA335A",
  },
  logo: {
    width: 66,
    height: 58,
    margin: 30,
  },
  img: {
    width: 50,
    height: 50,
  },
  user: {
    width: 50,
    height: 50,
    margin: 30,
  },
  map: {
    height: 100,
  },
});

class Carte extends Component {
  static defaultProps = {
    center: {
      lat: 48.8555,
      lng: 2.2316
    },
    zoom: 15
  };
  state = {
    // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#468189" />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View>
            <Header
              leftComponent={
                <Icon
                  name="menu"
                  onPress={() => this.props.navigation.openDrawer()}
                />
              }
              centerComponent={
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../../assets/logo.png")}
                  />
                </TouchableOpacity>
              }
              rightComponent={
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Compte")}
                >
                  <Image
                    style={styles.user}
                    source={require("../../../assets/users.png")}
                  />
                </TouchableOpacity>
              }
              containerStyle={{
                backgroundColor: "#EA335A",
                height: 100,
                justifyContent: "space-around",
              }}
            />
            <View style={styles.container}>
              <View
                style={{
                  height: 60,
                  width: window.width,
                  backgroundColor: "#ED85A8",
                }}
              >
                <View style={styles.containerTitle}>
                <Text style={styles.titleText}>Carte du festival</Text>
                </View>
              </View>
            </View>
            <View>
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBC6rKYHmJnSgHfr05CPdmzr4e8yRZ5UVo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.8555}
            lng={2.2316}
            text="Main stage"
          />
          <AnyReactComponent
            lat={48.8575}
            lng={2.2316}
            text="Little Sound"
          />
          <AnyReactComponent
            lat={48.8575}
            lng={2.2335}
            text="Toilettes"
          />
          <AnyReactComponent
            lat={48.8637}
            lng={2.2335}
            text="Parking 1"
          />
          <AnyReactComponent
            lat={48.8622}
            lng={2.2316}
            text="Parking 2"
          />

<AnyReactComponent
            lat={48.8615}
            lng={2.2325}
            text="Burger Sound"
          />
        </GoogleMapReact>
      </div>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Carte;
