import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, ScrollView } from "react-native";


class InformationsPage extends Component {
    state = {
        searchQuery: '',
    };

    _onChangeSearch = query => this.setState({ searchQuery: query });

    render() {
        const window = Dimensions.get('window');
        const { searchQuery } = this.state;
        return (
            <View>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Home")}>
 
                    <Image style={styles.img} source={require('./../assets/logo.png')} />
                    
                  </TouchableOpacity>} 
                    rightComponent={<TouchableOpacity activeOpacity = { .5 } onPress={()=> this.props.navigation.navigate("Compte")}>
                    <Image
                    style={styles.user}
                    source={require('./../assets/users.png')}
                  />
                  </TouchableOpacity>}
                    containerStyle={{
                        backgroundColor: '#C7AE3E',
                        height:100,
                        justifyContent: 'space-around',
                      }}
                />
                <View style={styles.container}>
                    
                    <View
                        style={{
                            height: 60,
                            width: window.width,
                            backgroundColor: "#FAEDA3",
                        }}
                    >
                        <View style={styles.container}>
                            <Text style={styles.titleText}>
                                Informations / FAQ
        </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <SearchBar style={{

                        width: window.width,
                        backgroundColor: "#FFFFFF",
                    }}
                    lightTheme
                    round
                    icon={{ type: 'font-awesome', name: 'search' }}
                        placeholder="Search"
                        onChangeText={this._onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.blocinfo}>

                    <Text style={styles.titleInfo}>
                        Comment faire ceci
        </Text>
                    <Text style={styles.info}>
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
        </Text>

                    <Text style={styles.titleInfo}>
                        Comment faire cela
        </Text>
                    <Text style={styles.info}>
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
        </Text>

                    <Text style={styles.titleInfo}>
                        Comment faire les deux
        </Text>
                    <Text style={styles.info}>
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
                        BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla
        </Text>

                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#C7AE3E',
    },
    blocinfo: {
        alignItems: 'center',
    },
    titleInfo: {
        fontSize: 30,
        fontWeight: "bold",
    },
    info: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
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
});


export default InformationsPage;