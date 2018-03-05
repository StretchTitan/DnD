import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import { handleAccountInfo } from './Model/CreateAccountActions';
// import { createAccount } from './Model/CreateAccountService';
import { createAccountStyles } from './Styles';

class CreateAccount extends Component {
    render() {
        const { accountInfo, handleAccountInfo } = this.props, 
            { FirstName, LastName, Email, Password } = accountInfo;

        return (
            <View style={ createAccountStyles.container }>
                <View style={ createAccountStyles.createAccountForm }>
                    <TextInput
                        style={ createAccountStyles.input }
                        onChangeText={ (value) => handleAccountInfo('FirstName', value) }
                        value={ FirstName }
                    />
                    <TextInput
                        style={ createAccountStyles.input }
                        onChangeText={ (value) => handleAccountInfo('LastName', value) }
                        value={ LastName }
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ CreateAccountReducer: { accountInfo } }) => ({ accountInfo });
const mapDispatchToProps = { handleAccountInfo };

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);