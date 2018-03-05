import React, { Component } from 'react';
import { Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import { handleCreds } from './Model/LoginActions';
import { login } from './Model/LoginService';
import { loginStyles } from './Styles';

class Login extends Component {
    render() {
        const { username, password, login, handleCreds, navigator } = this.props;

        return (
            <View style={ loginStyles.container }>
                <View style={ loginStyles.header }>
                </View>
                <View style={ loginStyles.loginForm }>
                    <TextInput
                        style={ loginStyles.input }
                        onChangeText={ (value) => handleCreds('username', value) }
                        value={ username }
                    />
                    <TextInput
                        style={ loginStyles.input }
                        secureTextEntry={ true }
                        onChangeText={ (value) => handleCreds('password', value) }
                        value={ password }
                    />
                    <View style={ loginStyles.rememberUsername }>
                        <Text style={ loginStyles.rememberUsernameText }>Remember Username</Text>
                    </View>
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity onPress={ login }>
                            <View style={ loginStyles.loginButton }>
                                <Text style={ loginStyles.loginButtonText }>Sign In iOS</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => navigator.push({ screen: 'NativePOC.CreateAccount', title: 'Create Account' }) }>
                            <View style={ loginStyles.loginButton }>
                                <Text style={ loginStyles.loginButtonText }>Create Account</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ LoginReducer: { isLoggedIn, username, password } }) => ({ isLoggedIn, username, password });
const mapDispatchToProps = { handleCreds, login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);