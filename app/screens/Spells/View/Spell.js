import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { spellsStyles } from '../Styles';

export default class Spell extends Component {
    render() {
        const { Name, Conjuration, CastingTime, Range, Duration, Damage, AttackType, Components, Description, Leveling } = this.props.spell;

        return (
            <View style={ spellsStyles.spellContainer }>
                <View style={ spellsStyles.spellRow }>
                    <Text style={ spellsStyles.spellName }>{ Name }</Text>
                </View>
                <View style={ spellsStyles.spellRow }>
                    <View>
                        <Text style={ spellsStyles.spellLabel }>Conjuration: </Text>
                        <Text style={ spellsStyles.spellText }>{ Conjuration }</Text>
                    </View>
                    <View>
                        <Text style={spellsStyles.spellText}>{ CastingTime }</Text>
                    </View>
                </View>
                <View style={spellsStyles.spellRow}>
                    <Text style={spellsStyles.spellText}>{ Range }</Text>
                    <Text style={spellsStyles.spellText}>{ Duration }</Text>
                </View>
                <View style={spellsStyles.spellRow}>
                    <Text style={spellsStyles.spellText}>{ Damage }</Text>
                    <Text style={spellsStyles.spellText}>{ AttackType }</Text>
                </View>
                <View style={spellsStyles.spellRow}>
                    {/* <Text style={spellsStyles.spellText}>{ Components }</Text> */}
                    <Text style={spellsStyles.spellText}>{ Description }</Text>
                    <Text style={spellsStyles.spellText}>{ Leveling }</Text>
                </View>
            </View>
        );
    }
}
