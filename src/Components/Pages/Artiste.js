import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions,  StatusBar, Alert, ScrollView } from "react-native";
import { getCurrentFrame } from 'expo/build/AR';
import { SearchBar } from "react-native-elements";
import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import axios from "axios";


const window = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
scrollView: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
},
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#93243F',
    padding: 15,
    alignContent: 'space-between',
  },
  img: {
    width: window.width,
    height: 200,
  },
  imgArtiste: {
    width : window.width,
    height: 250,
    marginRight: 100,
  },
  user: {
    width: 50,
    height: 50,
    margin: 30,
},
  logoAccueil: {
    width: 50,
    height: 50,
  },
  info: {
    alignContent: 'space-between',
    textAlign: 'right',
    fontSize: 20,
    paddingRight: 10,
    color: '#93243F',
  },
  containerTitle: {
    alignItems: "center",
  },

  infosup: {
    textAlign: 'center',
    fontSize: 15,
    padding: 20,
  }
});

class Artiste extends Component {
  constructor(props) {
    super(props);
    //initialisation des states informations et artistes
    this.state = { artistes: [] };
  }

  componentDidMount() {
    
    //récupération de l'API avec axios. Ensuite je met les artistes que l'on récupère de l'api dans le state artistes
    axios.get("http://localhost/msprfront/concert").then((response) => {
      this.setState({ artistes: response.data.concert });
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

  template = 
  <View>
                <Image
                  style={styles.img}
                  source={require('../../../assets/img002.jpg')}
                />
                <Text style={styles.titleText}>
                  Green Day
        </Text>
                <Text style={styles.info}>
                  Samedi
        </Text>
                <Text style={styles.info}>
                  22h
        </Text>
                <Text style={styles.info}>
                  Main Stage
        </Text>
                <Text style={styles.infosup}>
                  Green Day est un groupe de punk rock américain, originaire de Berkeley, en Californie.
                  Formé en 19872, le groupe est composé à l'origine du chanteur et guitariste Billie Joe Armstrong
                  et du bassiste Mike Dirnt, rejoints en 1988 par John Kiffmeyer remplacé à partir de 1992 par Tré Cool.
        </Text>
              </View>

            ;

  render() {
    const scrollEnabled = this.state.screenHeight > height;
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
                <Text style={styles.infosup}>
                  {artiste.information}
        </Text>
            
          </View>))}

      </ul>
    )
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
            <Header style={styles.header}
              leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
              centerComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Home")}>
 
                    <Image style={styles.logoAccueil} source={require('../../../assets/logo.png')} />
                    
                  </TouchableOpacity>} 
              rightComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Compte")}>
                <Image
                style={styles.user}
                source={require('../../../assets/users.png')}
              />
              </TouchableOpacity>}
              containerStyle={{
                backgroundColor: '#A0123D',
                height:100,
                justifyContent: 'space-around',
              }}


            />
            <View>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "#C58B9D",
                }}
              >
                <Text style={styles.titleText}>Les artistes</Text>

              </View>


              <View>
                {artiste}
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}
export default Artiste;