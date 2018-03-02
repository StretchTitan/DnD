import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { spellsStyles } from '../Styles';

export default class Spell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailCollapsed: true
        }
    }
    render() {
        const { Name, Conjuration, CastingTime, Range, Duration, Damage, AttackType, Components, Description, Leveling } = this.props.spell,
            { isDetailCollapsed } = this.state,
            detailsExpander = isDetailCollapsed ? "Show Details" : "Hide Details";

        return (
            <View style={ spellsStyles.spellContainer }>
                <View style={ spellsStyles.spellRow }>
                    <Text style={ spellsStyles.spellName }>{ Name }</Text>
                </View>
                <View style={ spellsStyles.spellRow }>
                    <View style={ spellsStyles.spellTextAndLabel }>
                        <Text style={ spellsStyles.spellLabel }>Conjuration: </Text>
                        <Text style={ spellsStyles.spellText }>{ Conjuration }</Text>
                    </View>
                    <View style={ spellsStyles.spellTextAndLabel }>
                        <Text style={ spellsStyles.spellLabel }>Casting Time: </Text>
                        <Text style={spellsStyles.spellText}>{ CastingTime }</Text>
                    </View>
                </View>
                <View style={spellsStyles.spellRow}>
                    <View style={ spellsStyles.spellTextAndLabel }>
                        <Text style={ spellsStyles.spellLabel }>Range: </Text>
                        <Text style={spellsStyles.spellText}>{ Range }</Text>
                    </View>
                    <View style={ spellsStyles.spellTextAndLabel }>
                        <Text style={ spellsStyles.spellLabel }>Components: </Text>
                        <Text style={spellsStyles.spellText}>{ Components }</Text>
                    </View>
                </View>
                <View style={spellsStyles.spellRow}>
                    <View style={ spellsStyles.spellTextAndLabel }>
                        <Text style={ spellsStyles.spellLabel }>Damage: </Text>
                        <Text style={spellsStyles.spellText}>{ Damage }</Text>
                    </View>
                    <View style={ spellsStyles.spellTextAndLabel }>
                        <Text style={ spellsStyles.spellLabel }>Duration: </Text>
                        <Text style={spellsStyles.spellText}>{ Duration }</Text>
                    </View>
                </View>
                <Button title={ detailsExpander } onPress={ () => this.setState({ isDetailCollapsed: !isDetailCollapsed }) } />
                <Collapsible collapsed={ isDetailCollapsed }>
                    <View style={ spellsStyles.expanderStyle }>
                        <Text style={ spellsStyles.spellExpanderLabel }>Description: </Text>
                        <Text style={ spellsStyles.spellExpanderText }>{ Description }</Text>
                        <Text style={ spellsStyles.spellExpanderLabel }>Leveling: </Text>
                        <Text style={ spellsStyles.spellExpanderText }>{ Leveling }</Text>
                    </View>
                </Collapsible>
            </View>
        );
    }
}
