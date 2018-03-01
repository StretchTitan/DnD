import { StyleSheet } from 'react-native';

export const spellsStyles = StyleSheet.create({
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
    },
    spellContainer: {
        padding: 10,
        borderBottomColor: '#8E8E93',
        borderBottomWidth: 1
    },
    spellRow: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    scrollview: {
        flex: 1,
        alignSelf: 'stretch'
    }
});