import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, ScrollView } from "react-native";
import { getCurrentFrame } from 'expo/build/AR';
import { SearchBar } from "react-native-elements";


const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#2761F6',
        padding: 15,
        textAlign: 'center'
    },
    
    info: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    buttonScene: {

    }, 
    logo: {
        width: 66,
        height: 58,
        margin: 30,
    },
    img: {
        width: window.width ,
        height: 200,
    },
    user: {
        width: 50,
        height: 50,
        margin: 30,
    },
});

class Programme extends Component {
    render() {
        return (


            <View>
                            <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<Image style={styles.logo} source={require('./../assets/logo.png')}/>}
                    rightComponent={<Image style={styles.user} source={require('./../assets/users.png')}/>}
                    containerStyle={{
                        backgroundColor: '#2761F6',
                        height:100,
                        justifyContent: 'space-around',
                      }}
                    
                />
                <View style={styles.container}>
                    <View
                        style={{
                            height: 60,
                            width: window.width,
                            backgroundColor: "#88AEF7",
                            flexDirection: 'row',
                        }}
                    >

                        <Text style={styles.titleText}>
                            Vendredi
        </Text>

                        <Text style={styles.titleText}>
                            Samedi
        </Text>

                        <Text style={styles.titleText}>
                            Dimanche
        </Text>


                    </View>

                    <View>
                        <Button
                            title="Par scène"
                            color="#2761F6"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                            style={styles.buttonScene}
                        />
                        <Button
                            title="Par heure"
                            color="#2761F6"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                            style={styles.buttonScene}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.img}
                            source={require('./../assets/img002.jpg')}
                        />
                        <Text style={styles.info}>
                            Artiste
        </Text>
                        <Text style={styles.info}>
                            Heures
        </Text>
                        <Text style={styles.info}>
                            Scene
        </Text>
                    </View>

                </View>
            </View>

        );
    }
}
export default Programme;