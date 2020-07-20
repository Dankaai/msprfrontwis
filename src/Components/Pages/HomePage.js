import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "native-base";
import { SafeAreaView } from "react-navigation";
import { SocialIcon } from 'react-native-elements'
import axios from "axios";
import * as WebBrowser from "expo-web-browser";


//récupération de la hauteur de la fenêtre de l'appareil
const { height } = Dimensions.get("window");

class HomePage extends Component {
  constructor(props) {
    super(props);
    //initialisation des states informations et artistes
    this.state = { informations: [], artistes: [] };
  }

  componentDidMount() {
    //récupération de l'API avec axios. Ensuite je met la dernière information que l'on récupère de l'api dans le state informations
    axios
      .get("http://localhost/msprfront/last_informations")
      .then((response) => {
        this.setState({ informations: response.data.information });
      });

    //récupération de l'API avec axios. Ensuite je met les artistes que l'on récupère de l'api dans le state artistes
    axios.get("http://localhost/msprfront/artiste").then((response) => {
      this.setState({ artistes: response.data.artiste });
    });
  }
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
    //initialisation de info avec this.state.informations
    const info = this.state.informations;
    //initialisation de listArtistes avec this.state.artistes
    const listArtistes = this.state.artistes;

    //la constante artiste qui va permettre d'utiliser le code ci-dessous pour afficher tous les artistes avec leur image correspondant et le nom de l'artiste en dessous
    const artiste = (
      <ul>
        {listArtistes.map((artiste) => (
          <View key={
            artiste.Id_artiste
          }>
            <Image
              style={styles.img}
              source={require("../../../assets/" + artiste.image)}
            />
            <Text style={styles.nomArtiste}>{artiste.nom}</Text>
          </View>
        ))}
      </ul>
    );

    //initialisation de la constante informations qui va permettre d'afficher dans le bandeau de la page d'accueil la dernière information liée au festival
    const informations = (
      <ul>
        {info.map((information) => (
          <Text style = {styles.infosImportante} key={information.Id_information}>{information.texte}</Text>
        ))}
      </ul>
    );

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
                  onPress={() => this.props.navigation.toggleDrawer()}
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
                  onPress={() => this.props.navigation.navigate("Connexion")}
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

            <View
              style={{
                flexDirection: "row",
                height: 50,
                width: window.width,
                backgroundColor: "#C58B9A",
              }}
            >
              {/* utilisation de la constante information */}
              {informations}
            </View>
            {/* utilisation de la constante artiste */}
            <View>{artiste}</View>

            <View style={styles.container}>
            <Button
              title="Aller vers la billeterie"
              onPress={this._handleOpenWithWebBrowser}
              style={styles.button}
            />
          </View>
          <View
              style={{
                flexDirection: "row",
                height: 80,
                width: window.width,
                
              }}
            >
          <SocialIcon
  type='twitter'
/>
<SocialIcon
  
  type='facebook'
/>
</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  _handleOpenWithLinking = () => {
    Linking.openURL("https://www.digitick.com/");
  };

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync("https://www.digitick.com/");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infosImportante: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#A0123D",
    padding: 15,
    textAlign: "center",
  },
  scrollView: {
    backgroundColor: "blue",
    marginHorizontal: 20,
  },
  nomArtiste: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A0123D",
    padding: 15,
    textAlign: "center",
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
export default HomePage;
