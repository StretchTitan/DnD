import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';

import { getSpells } from './Model/SpellsService';
import { spellsStyles } from './Styles';
import Spell from './View/Spell';

import seedSpells from '../../../api/seeding/seed_spells';

class Spells extends Component {
    componentWillMount() {
        this.props.getSpells();
    }

    render() {
        const { spells } = this.props;

        return (
            <View style={spellsStyles.view}>
                <ScrollView style={spellsStyles.scrollview}>
                    { spells.map((spell, i) => <Spell spell={ spell } key={ i } />) }
                </ScrollView>
                {/* <Button title="seed spells" onPress={ seedSpells } /> */}
            </View>
        );
    }
}

const mapStateToProps = ({ SpellsReducer: { spells } }) => ({ spells });
const mapDispatchToProps = { getSpells };

export default connect(mapStateToProps, mapDispatchToProps)(Spells);
