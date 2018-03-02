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
    spellContainer: {
        padding: 10,
        borderBottomColor: '#8E8E93',
        borderBottomWidth: 1
    },
    spellRow: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginBottom: 10
    },
    spellTextAndLabel: {
        flex: 0.5
    },
    spellLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    spellText: {
        fontSize: 16
    },
    spellName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    spellExpander: {
        flex: 1
    },
    spellExpanderLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    spellExpanderText: {
        fontSize: 14,
        marginBottom: 10
    },
    scrollview: {
        flex: 1,
        alignSelf: 'stretch'
    }
});