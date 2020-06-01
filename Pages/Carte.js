import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, ScrollView } from "react-native";
import { getCurrentFrame } from 'expo/build/AR';
import { Left, Right, Icon } from 'native-base';
import { Header } from 'react-native-elements';



const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#EA335A',
    },
    img: {
        width: 200,
        height: 200,
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
                        backgroundColor: "#EA335A"
                    }}


                ></View>
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

        );
    }
}
export default Carte;