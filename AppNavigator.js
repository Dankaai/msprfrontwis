import { createStackNavigator } from 'react-navigation';
import App from './App';
import artiste from './artiste';

const AppNavigator = createStackNavigator({
  App: { screen: App },
  artiste: { screen: artiste}
});