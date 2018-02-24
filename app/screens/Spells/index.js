import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

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
    },
    reminder: {
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 20
    },
    scrollview: {
        flex: 1,
        alignSelf: 'stretch'
    }
});

class Spells extends Component {
    render() {
        const { spells } = this.props;

        return (
            <View style={styles.view}>
                <Text style={styles.welcome}>Spells</Text>
                <ScrollView style={styles.scrollview}>
                    { spells.map((reminder, i) => {
                        return (
                            <Text style={styles.reminder} key={ i }>{ reminder.name }</Text>
                        );
                    }) }
                    { spells.map((reminder, i) => {
                        return (
                            <Text style={styles.reminder} key={ i }>{ reminder.name }</Text>
                        );
                    }) }
                    { spells.map((reminder, i) => {
                        return (
                            <Text style={styles.reminder} key={ i }>{ reminder.name }</Text>
                        );
                    }) }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ SpellsReducer: { spells } }) => ({ spells });

export default connect(mapStateToProps)(Spells);
