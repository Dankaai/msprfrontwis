import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, ScrollView } from "react-native";
import { getCurrentFrame } from 'expo/build/AR';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';


const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    width: 2000,
    backgroundColor: 'green',
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'left',
    color: '#75D2FA',
  },
  img: {
    width: 200,
    height: 200,
  },
  header:
  {
    backgroundColor: "#A0123D",
    height: 400,
    tintColor: "#A0123D"
  }
});

class Partenaire extends Component {
  render() {
    return (



      <View style={styles.container}>
        <Header style={styles.header}
          leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
          rightComponent={<Image
            style={styles.logo}
            source={require('./../assets/logo.png')}
          />}


        />

        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: window.width,
            backgroundColor: "#75D2FA"
          }}


        >


        </View>
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
            <Text style={styles.titleText}>
              Partenaires
        </Text>
          </View>




        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              margin: 20,
            }}
          >

            <Image
              style={styles.img}
              source={require('./../assets/react.png')}
            />


          </View>

          <View
            style={{
              flexDirection: "row",
              margin: 20,
            }}
          >

            <Image
              style={styles.img}
              source={require('./../assets/react.png')}
            />


          </View>

          <View
            style={{
              flexDirection: "row",
              margin: 20,
            }}
          >

            <Image
              style={styles.img}
              source={require('./../assets/react.png')}
            />


          </View>

        </ScrollView>
      </View>

    );
  }
}
export default Partenaire;
