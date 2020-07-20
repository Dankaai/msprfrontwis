import React, { Component } from "react";
import { Header } from "react-native-elements";
import { Left, Right, Icon } from "native-base";
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
  Alert,
  ScrollView,
} from "react-native";
import { getCurrentFrame } from "expo/build/AR";
import axios from "axios";
import { SearchBar } from "react-native-elements";

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2761F6",
    padding: 15,
    textAlign: "center",
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2761F6",
    padding: 15,
    textAlign: "center",
  },

  info: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  choixProg: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2761F6",
    
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
  imgArtiste: {
      width:window.width,
      height: 130,
      marginRight: 40,
  },
  user: {
    width: 50,
    height: 50,
    margin: 30,
  },
});

class ProgrammeDateVendredi extends Component {
    constructor(props) {
        super(props);
        //initialisation des states informations et artistes
        this.state = { artistes: [] };
      }
    
      componentDidMount() {
        
        //récupération de l'API avec axios. Ensuite je met les artistes que l'on récupère de l'api dans le state artistes
        axios.get("http://localhost/msprfront/programmeVendredi").then((response) => {
          this.setState({ artistes: response.data.concert });
        });
      }
  render() {
    const listArtistes = this.state.artistes;
    const artiste = (
      <ul>
         {listArtistes.map((artiste) => (
          <View key={
            artiste.Id_artiste
          }>
            <Image
              style={styles.imgArtiste}
              source={require("../../../assets/" + artiste.image)}
            />
                <Text style={styles.titleText}>
                {artiste.artiste}
        </Text>
                <Text style={styles.info}>
                  {artiste.date}
        </Text>
                <Text style={styles.info}>
                  {artiste.heure_debut}
        </Text>
                <Text style={styles.info}>
                  {artiste.scene}
        </Text>
                
            
          </View>))}

      </ul>
    )
    return (
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
            backgroundColor: "#2761F6",
            height: 100,
            justifyContent: "space-around",
          }}
        />
        <View style={styles.container}>
          <View
            style={{
              height: 100,
              width: window.width,
              backgroundColor: "#88AEF7",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "stretch",
              alignItems: "center",
              flex: 1,
            }}
          >
            <TouchableOpacity
                  activeOpacity={0.5}
                  backgroundColor= "#2761F6"
                  onPress={() => this.props.navigation.navigate("LittleSound")}
                >
                  <Text style = {styles.choixProg}>Little Sound</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  backgroundColor= "#2761F6"
                  onPress={() => this.props.navigation.navigate("MainStage")}
                >
                  <Text style = {styles.choixProg}>Main Stage</Text>
                </TouchableOpacity>
              
              <Text style= {styles.dayText}> Vendredi</Text>
              <TouchableOpacity
                  activeOpacity={0.5}
                  backgroundColor= "#2761F6"
                  onPress={() => this.props.navigation.navigate("Samedi")}
                >
                  <Text style = {styles.choixProg}>Samedi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate("Dimanche")}
                >
                  <Text style = {styles.choixProg}>Dimanche</Text>
                </TouchableOpacity>
          </View>
          
          <View>
            {artiste}
          </View>
        </View>
      </View>
    );
  }
}
export default ProgrammeDateVendredi;
