import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

export default class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            spell: {}
        }
    }

    componentDidMount() {
        const self = this;
        console.log("In Did Mount");

        firebase.database().ref('/spells/spell1').once('value').then(function(spell) {
            console.log(spell.val());
            self.setState({ spell: spell.val() });
        });
    }

    render() {
        return (
            <View>
                <Text>Stats</Text>
                <Text>{ this.state.spell.Name }</Text>
                <Text>{ this.state.spell.Description }</Text>
            </View>
        );
    }
}
