import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { setLogin } from './Model/LoginActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

class Login extends Component {
    render() {
        const { setLogin } = this.props;

        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>Login Android</Text>
                <Button title='Login' onPress={ () => setLogin(true) } />
            </View>
        );
    }
}

const mapStateToProps = ({ LoginReducer: { isLoggedIn } }) => ({ isLoggedIn });
const mapDispatchToProps = { setLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);