import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, StatusBar, Alert, ScrollView } from "react-native";
import { getCurrentFrame } from 'expo/build/AR';
import { Left, Right, Icon } from 'native-base';
import { Header } from 'react-native-elements';



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
        color: '#EA335A',
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

class Carte extends Component {
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
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Home")}>
 
                    <Image style={styles.img} source={require('../../../assets/logo.png')} />
                    
                  </TouchableOpacity>} 
                    rightComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Compte")}>
                    <Image
                    style={styles.user}
                    source={require('../../../assets/users.png')}
                  />
                  </TouchableOpacity>}
                    containerStyle={{
                        backgroundColor: '#EA335A',
                        height:100,
                        justifyContent: 'space-around',
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
                        <View style={styles.container}>
                            <Text style={styles.titleText}>
                                Carte
        </Text>
                        </View>


                    </View>
                    <ScrollView>



                    </ScrollView>
                </View>
            </View>
            </ScrollView>
      </SafeAreaView>
        );
    }
}
export default Carte;