import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class Photos extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                        backgroundColor: '#75D2FA',
                        height:100,
                        justifyContent: 'space-around',
                      }}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Photos</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
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
export default Photos;