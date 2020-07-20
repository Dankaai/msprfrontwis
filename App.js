import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { Icon } from "native-base";
import HomePage from "./src/Components/Pages/HomePage";
import Artiste from "./src/Components/Pages/Artiste";
import Billeterie from "./src/Components/Pages/Billeterie";
import Compte from "./src/Components/Pages/Compte";
import InformationsPage from "./src/Components/Pages/InformationsPage";
import Carte from "./src/Components/Pages/Carte";
import Photos from "./src/Components/Pages/Photos";
import Connexion from "./src/Components/Pages/Connexion";
import Programme from "./src/Components/Pages/Programme";
import ProgrammeSceneMain from "./src/Components/Pages/ProgrammeSceneMain";
import ProgrammeDateVendredi from "./src/Components/Pages/ProgrammeDateVendredi";
import ProgrammeDateSamedi from "./src/Components/Pages/ProgrammeDateSamedi";
import ProgrammeDateDimanche from "./src/Components/Pages/ProgrammeDateDimanche";
import ProgrammeSceneLittle from "./src/Components/Pages/ProgrammeSceneLittle";
import Partenaire from "./src/Components/Pages/Partenaire";
import { createDrawerNavigator } from "react-navigation-drawer";
import { DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import ReactDOM from "react-dom";
import Loading from "./src/Components/Pages/Loading";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

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
  },
});

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: window.height,
          backgroundColor: "#FFFFFF",
          opacity: 1,
        }}
      >
        <Image style={styles.logo} source={require("./assets/logo.png")} />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "center", bottom: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", marginRight: 15, opacity: 1 }}
          >
            <Image
              source={require("./assets/users.png")}
              name="users.png"
              onPress={() => console.log("Tıkladın")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const ConnexionStack = createStackNavigator({
  Connexion: {
    screen: Connexion,
  },
});
const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: () => ({
        headerTitle: "Home",
        
      }),
    },
    Informations: {
      screen: InformationsPage,
      navigationOptions: {
        headerTitle: "Informations pratiques",
      },
     
    },
    Compte: {
      screen: Compte,
      navigationOptions: {
        headerTitle: "Compte",
        
      },
    },
    Programme: {
      screen: Programme,
      navigationOptions: {
        headerTitle: "Programme",
      },
    },
    Carte: {
      screen: Carte,
      navigationOptions: {
        headerTitle: "Carte",
      },
    },

    Billeterie: {
      screen: Billeterie,
      url: "https://www.digitick.com/",
      navigationOptions: {
        headerTitle: "Billeterie",
      },
    },

    Artiste: {
      screen: Artiste,
      navigationOptions: {
        headerTitle: "Artiste",
      },
    },
    Partenaire: {
      screen: Partenaire,
      navigationOptions: {
        headerTitle: "Partenaires",
      },
    },
    Photos: {
      screen: Photos,
      navigationOptions: {
        headerTitle: "Photos",
      },
    },
  },

  {
    drawerPosition: "left",
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: (Dimensions.width / 3) * 2,
  }
);



const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        headerTitle: "Home",
        headerTintColor: "#A0123D",
        headerStyle: {
          backgroundColor: "#A0123D",
          borderBottomColor: "#A0123D",
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
      },
    },
    Informations: {
      screen: InformationsPage,
      navigationOptions: {
        headerTitle: "Informations pratiques",
      },
      headerTintColor: "#A0123D",
      headerStyle: {
        backgroundColor: "#A0123D",
        borderBottomColor: "#A0123D",
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        fontSize: 18,
      },
    },
    Compte: {
      screen: Compte,
      navigationOptions: {
        headerTitle: "Compte",
        headerTintColor: "#A0123D",
        headerStyle: {
          backgroundColor: "#A0123D",
          borderBottomColor: "#A0123D",
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
      },
    },

    Vendredi: {
      screen: ProgrammeDateVendredi,
      drawerLabel: "Vendredi",
      navigationOptions: {
        headerTitle: "Programme",
      },
    },
    Samedi: {
      screen: ProgrammeDateSamedi,
      drawerLabel: "Samedi",
      navigationOptions: {
        headerTitle: "Programme",
      },
    },
    Dimanche: {
      screen: ProgrammeDateDimanche,
      drawerLabel: "Dimanche",
      navigationOptions: {
        headerTitle: "Programme",
      },
    },
    MainStage: {
      screen: ProgrammeSceneMain,
      drawerLabel: "Main Stage",
      navigationOptions: {
        headerTitle: "Programme",
      },
    },
    LittleSound: {
      screen: ProgrammeSceneLittle,
      drawerLabel: "Little Sound",
      navigationOptions: {
        headerTitle: "Programme",
      },
    },
    Carte: {
      screen: Carte,
      navigationOptions: {
        headerTitle: "Carte",
      },
    },

    Billeterie: {
      screen: Billeterie,
      url: "https://www.digitick.com/",
      navigationOptions: {
        headerTitle: "Billeterie",
      },
    },

    Artiste: {
      screen: Artiste,
      navigationOptions: {
        headerTitle: "Artiste",
      },
    },
    Partenaire: {
      screen: Partenaire,
      navigationOptions: {
        headerTitle: "Partenaires",
      },
    },
    Photos: {
      screen: Photos,
      navigationOptions: {
        headerTitle: "Photos",
      },
    },
  },

  {
    drawerPosition: "left",
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: (Dimensions.width / 3) * 2,
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      Connexion: ConnexionStack,
      AppStack: AppStack,
      Drawer: DrawerNav,
    },
    {
      initialRouteName: "Drawer",
    }
  )
);

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

//export default AppContainer;
