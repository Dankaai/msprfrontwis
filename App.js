

import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import HomePage from './Pages/HomePage';
import Artiste from './Pages/Artiste';
import Billeterie from './Pages/Billeterie';
import Compte from './pages/Compte';
import InformationsPage from './Pages/InformationsPage';
import Carte from './Pages/Carte';
import Photos from './Pages/Photos';
import Connexion from './Pages/Connexion';
import Programme from './Pages/Programme';
import Partenaire from './Pages/Partenaire';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';

import Loading from "./Pages/Loading";



class App extends Component {
	render() {
		return <AppContainer />;
	}
}

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

const ConnexionStack = createStackNavigator({
  Connexion: {
    screen: Connexion,
  },
});
const AppStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ( {
      headerTitle: 'Home',
      headerTintColor: '#A0123D',
          headerStyle: {
            backgroundColor: '#A0123D',
            borderBottomColor: '#A0123D',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
     
    }
    
    )},
  InformationsPage: {
    screen: InformationsPage,
    navigationOptions: {
      headerTitle: 'Informations pratiques'
    },
    headerTintColor: '#A0123D',
          headerStyle: {
            backgroundColor: '#A0123D',
            borderBottomColor: '#A0123D',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
     
    
  },
  Compte: {
    screen: Compte,
    navigationOptions: {
      headerTitle: 'Compte',
      headerTintColor: '#A0123D',
          headerStyle: {
            backgroundColor: '#A0123D',
            borderBottomColor: '#A0123D',
            borderBottomWidth: 3,
          },
          headerTitleStyle: {
            fontSize: 18,
          },
     
    }

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
    screen: Billeterie,
    url: 'https://www.digitick.com/',
    navigationOptions: {
      headerTitle: 'Billeterie'
    }
  },

  Artiste:{
    screen: Artiste,
    navigationOptions: {
      headerTitle: 'Artiste'
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

  const DrawerNav = createDrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: {
        headerTitle: 'Home',
        headerTintColor: '#A0123D',
            headerStyle: {
              backgroundColor: '#A0123D',
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
              backgroundColor: '#A0123D',
              borderBottomColor: '#A0123D',
              borderBottomWidth: 3,
            },
            headerTitleStyle: {
              fontSize: 18,
            },
       
      
    },
    Compte: {
      screen: Compte,
      navigationOptions: {
        headerTitle: 'Compte',
        headerTintColor: '#A0123D',
            headerStyle: {
              backgroundColor: '#A0123D',
              borderBottomColor: '#A0123D',
              borderBottomWidth: 3,
            },
            headerTitleStyle: {
              fontSize: 18,
            },
       
      }
  
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
      screen: Billeterie,
      url: 'https://www.digitick.com/',
      navigationOptions: {
        headerTitle: 'Billeterie'
      }
    },
  
    Artiste:{
      screen: Artiste,
      navigationOptions: {
        headerTitle: 'Artiste'
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

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    Connexion: ConnexionStack,
    AppStack: AppStack,
    Drawer: DrawerNav,
  },
  {
    initialRouteName: 'Drawer',
  }
));

export default AppContainer;
