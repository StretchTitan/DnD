import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens/index.js';

registerScreens();

export default class App extends Component {
    constructor(props) {
        super(props);

        const { isLoggedIn } = store.getState().LoginReducer;
        
        store.subscribe(() => this.onStoreUpdate());
        this.startApp(isLoggedIn);
    }

    onStoreUpdate() {
        const { isLoggedIn } = store.getState().LoginReducer;

        if (this.isLoggedIn !== isLoggedIn) {
            this.isLoggedIn = isLoggedIn;
            this.startApp(isLoggedIn);
        }
    }

    startApp(isLoggedIn) {
        if ( !isLoggedIn ) {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'NativePOC.Login',
                    navigatorStyle: {
                        navBarHidden: true
                    }
                }
            });
            return;
        } else {
            Navigation.startTabBasedApp({
                tabs: [{
                    label: 'Stats',
                    screen: 'NativePOC.Stats',
                    icon: require('./images/list.png'),
                    title: 'Stats'
                }, {
                    label: 'Spells',
                    screen: 'NativePOC.Spells',
                    icon: require('./images/heart_plus.png'),
                    title: 'Spells'
                }, {
                    label: 'Notes',
                    screen: 'NativePOC.Notes',
                    icon: require('./images/calendar.png'),
                    title: 'Notes'
                }],
                tabsStyle: {
                    tabBarButtonColor: '#414141',
                    tabBarSelectedButtonColor: '#0066AA',
                    tabBarSelectedLabelColor: '#0066AA',
                    tabBarLabelColor: '#414141',
                    tabBarBackgroundColor: '#FFFFFF'
                }
            });
            return;
        }
    }
}
