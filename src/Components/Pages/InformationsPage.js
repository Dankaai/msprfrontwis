import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { AppRegistry,FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, ScrollView } from "react-native";
import * as InformationAction from '../../actions/InformationAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';



class InformationsPage extends Component {
    // Components/Search.js

constructor(props) {
    super(props)
    this.state = { informations: [],
        searchQuery: '', }
}
    

    componentDidMount() {

    axios.get('http://localhost/msprfront/information').then(response => {

            this.setState({informations: response.data.information});
    });

        //this.props.InformationAction.getInformations();
    
      }

      FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    _onChangeSearch = query => this.setState({ searchQuery: query });

    render() {
        
    console.log(this.state.informations.information);

        const window = Dimensions.get('window');
        const infos = this.state.informations;
        const { searchQuery } = this.state.searchQuery;
        return (
            
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


        <ul>
                {infos.map(information => <li> date: {information.date} information niveau: {information.niveau} information: {information.texte} </li>)}
        </ul>

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

function mapStateToProps(state) {
	return {
		informations: state.informations
	};
}

function mapDispatchToProps(dispatch) {
	return {
		InformationAction: bindActionCreators(InformationAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationsPage);