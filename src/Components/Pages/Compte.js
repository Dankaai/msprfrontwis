import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  Button,
} from "react-native";
import { Header } from "react-native-elements";
import { Left, Right, Icon } from "native-base";
import { SafeAreaView } from "react-navigation";

const { height } = Dimensions.get("window");

class Compte extends Component {
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
          <View style={styles.container}>
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
                    style={styles.logoAccueil}
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
                backgroundColor: "#A0123D",
                height: 100,
                justifyContent: "space-around",
              }}
            />
            <View style={styles.container}>
          <View
            style={{
              height: 60,
              width: window.width,
              backgroundColor: "#C58B9A",
            }}
          >
            <View style={styles.containerTitle}>
              <Text style={styles.titleText}>Mon compte</Text>
            </View>
          </View>
        </View>
<Text>
    Nom Prenom
</Text>
<Text>Type de billet</Text>
<Text>Mes rendez-vous immanquables !</Text>
<Text>Mes artistes</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#A0123D",
  },
  scrollView: {
    backgroundColor: "blue",
    marginHorizontal: 20,
  },
  logo: {
    width: 66,
    height: 58,
    margin: 30,
  },
  img: {
    width: window.width,
    height: 200,
  },
  logoAccueil: {
    width: 50,
    height: 50,
  },
  user: {
    width: 50,
    height: 50,
    margin: 30,
  },
  menu: {
    width: 50,
    height: 50,
    margin: 30,
  },
});
export default Compte;
