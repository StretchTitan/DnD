import { StyleSheet } from 'react-native';

export const createAccountStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    createAccountForm: {
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
    }
});