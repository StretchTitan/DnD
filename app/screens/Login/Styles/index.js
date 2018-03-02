import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
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