/*
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from "react-native";
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';
import AppNavigator from './AppNavigator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  */
/*
render() {
  return ( 
  

      <MapView style={styles.map}
      region={{
        latitude: 48.858359,
        longitude: 2.233829,
        latitudeDelta: 0.01,
        longitudeDelta:0.01
      }}>
        <MapView.Marker
        coordinate={{
          latitude: 48.858359,
        longitude:  2.233829

        }}

        title={'scene 1'}
        description={'scene 1 du festival'}
        />

      </MapView>

    
  )
}
}

const styles = StyleSheet.create({
container:{
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0, 
  right: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
}, 
map: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}
});

const styles = StyleSheet.create({
container: {
  paddingTop: 50,
},
tinyLogo: {
  margin: 5,
  width: 50,
  height: 50,
},
logo: {
  width: 66,
  height: 58,
},
});
*/
//export default function App() {
/*
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
          margin: 20
        }}
      >


        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

      </View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >

        <Text style={{
          margin: 20
        }}>Hello World!</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 20,
          height: 100,
          padding: 20
        }}
      >
        <Button style={{
          margin: 20
        }}
          title="btnmenu"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{
          margin: 20
        }}>Hello World!</Text>
      </View>


    </View>

  );

*/
/*render() {
    return (
      <NavigationContainer>
      
      <View>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20,
            margin: 20
          }}
        >


          <Button style={{
            margin: 20
          }}
            title="btnmenu"
            color="#f194ff"
            onPress={() =>
              this.props.navigation.navigate('artiste')
            }

          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <Button style={{
            margin: 20
          }}
            title="btnmenu"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />

        </View>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
          }}
        >



          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>

      </View>

    </NavigationContainer>

    );
  }
}
*/

import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import HomePage from './Pages/HomePage';
import InformationsPage from './Pages/InformationsPage';
import Carte from './Pages/Carte';
import Photos from './Pages/Photos';
import Programme from './Pages/Programme';
import Partenaire from './Pages/Partenaire';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerItems } from 'react-navigation-drawer';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 66,
    height: 58,
    margin: 30,
  },
  img: {
    width: window.width,
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
  }
});

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height : window.height , backgroundColor: '#FFFFFF', opacity: 1 }}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "center", bottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginRight: 15, opacity:1 }}>
            <Image source={require('./assets/users.png')} name="users.png" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerTitle: 'Home',
      headerTintColor: '#A0123D',
          headerStyle: {
            backgroundColor: '#2F95D6',
            borderBottomColor: '#A0123D',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
     
    }
    
  },
  InformationsPage: {
    screen: InformationsPage,
    navigationOptions: {
      headerTitle: 'Informations pratiques'
    },
    headerTintColor: '#A0123D',
          headerStyle: {
            backgroundColor: '#2F95D6',
            borderBottomColor: '#A0123D',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
     
    
  },
  Programme: {
    screen: Programme,
    navigationOptions: {
      headerTitle: 'Programme'
    }
  },
  Carte: {
    screen: Carte,
    navigationOptions: {
      headerTitle: 'Carte'
    }
  },

  Billeterie: {
    screen: InformationsPage,
    navigationOptions: {
      headerTitle: 'Billeterie'
    }
  },
  Partenaire: {
    screen: Partenaire,
    navigationOptions: {
      headerTitle: 'Partenaires'
    }
  },
  Photos: {
    screen: Photos,
    navigationOptions: {
      headerTitle: 'Photos'
    }
  }
  
},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (Dimensions.width / 3) * 2
  });

const App = createAppContainer(Drawer);

export default App;
