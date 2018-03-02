import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import store from '../store';
import Login from './Login';
import Stats from './Stats';
import Spells from './Spells';
import Notes from './Notes';

export function registerScreens() {
    Navigation.registerComponent('NativePOC.Login', () => Login, store, Provider);
    Navigation.registerComponent('NativePOC.Stats', () => Stats, store, Provider);
    Navigation.registerComponent('NativePOC.Spells', () => Spells, store, Provider);
    Navigation.registerComponent('NativePOC.Notes', () => Notes, store, Provider);
}