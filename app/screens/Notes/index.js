import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Notes extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.welcome}>Notes</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomColor: '#8E8E93',
        borderBottomWidth: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
