import firebase from 'react-native-firebase';

import { setLogin } from './LoginActions'

const login = () => (dispatch, getState) => {
    const { username, password } = getState().LoginReducer;

    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(username, password).then(
        response => {
            console.log(response);
            return dispatch(setLogin(true))
        }
    ).catch(
        error => console.log(error)
    );
};

const createAccount = () => (dispatch, getState) => {
    const { email, password } = getState().LoginReducer.createAccountInfo;

    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).catch(function(error) {
        // self.setState({ login: error.message })
        console.log(error);
    });
}

export { login, createAccount }