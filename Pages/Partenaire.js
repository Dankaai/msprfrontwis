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
  logo: {
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

class Partenaire extends Component {
  render() {
    return (



      <View>
        <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<Image style={styles.logo} source={require('./../assets/logo.png')}/>}
                    rightComponent={<Image style={styles.user} source={require('./../assets/users.png')}/>}
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
