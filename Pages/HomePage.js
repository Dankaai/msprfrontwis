import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, ScrollView } from "react-native";
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        
        
    },
    scrollView: {
        backgroundColor: 'blue',
        marginHorizontal: 20,
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
    menu: {
        width: 50,
        height: 50,
        margin: 30,
    },
    header:
    {
        backgroundColor: "#A0123D",
        height:400,
    tintColor:"#A0123D"
    }
});

class HomePage extends Component {
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
                        backgroundColor: "#C58B9D"
                    }}


                >


                </View>
                <SafeAreaView>
                    <ScrollView style={styles.scrollView}>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "green",
                                width: window.width,
                            }}
                        >

                            <Image
                                style={styles.img}
                                source={require('./../assets/img001.jpg')}
                            />


                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "green",
                                width: window.width ,
                            }}
                        >

                            <Image
                                style={styles.img}
                                source={require('./../assets/img002.jpg')}

                            />


                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "green",
                                width: window.width ,
                            }}
                        >

                            <Image
                                style={styles.img}
                                source={require('./../assets/img003.jpg')}
                            />


                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "green",
                                width: window.width  ,
                            }}
                        >

                            <Image
                                style={styles.img}
                                source={require('./../assets/img004.jpg')}
                            />


                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>




        );

    }
}
export default HomePage;