import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { handleCreds, setLogin } from './Model/LoginActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        height: 100,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0069B1'
    },
    loginForm: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-start'
    },
    input: {
        height: 64,
        paddingHorizontal: 16,
        alignSelf: 'stretch',
        color: '#414141',
        fontWeight: 'bold',
        fontSize: 18,
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: 2
    },
    buttonContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        alignSelf: 'stretch'
    },
    rememberUsername: {
        height: 56,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    rememberUsernameText: {
        color: '#414141',
        fontSize: 18,
        fontWeight: 'bold'
    },
    loginButton: {
        backgroundColor: '#0069B1',
        height: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

class Login extends Component {
    render() {
        const { username, password, setLogin, handleCreds } = this.props;

        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Image source={require('../../../images/logo_white.png')} />
                </View>
                <View style={ styles.loginForm }>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ (value) => handleCreds('UserName', value) }
                        value={ username }
                    />
                    <TextInput
                        style={ styles.input }
                        secureTextEntry={ true }
                        onChangeText={ (value) => handleCreds('Password', value) }
                        value={ password }
                    />
                    <View style={ styles.rememberUsername }>
                        <Text style={ styles.rememberUsernameText }>Remember Username</Text>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity onPress={ () => setLogin(true) }>
                            <View style={ styles.loginButton }>
                                <Text style={ styles.loginButtonText }>Sign In iOS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ LoginReducer: { isLoggedIn, username, password } }) => ({ isLoggedIn, username, password });
const mapDispatchToProps = { handleCreds, setLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);