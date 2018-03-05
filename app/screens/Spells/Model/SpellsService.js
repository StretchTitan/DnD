import firebase from 'react-native-firebase';
import { forIn } from 'lodash';

import { setSpells } from './SpellsActions';

const getSpells = () => (dispatch, getState) => {
    firebase.database().ref('/spells').once('value').then(
        spells => {
            let spellsWithId = [];
            forIn(spells.val(), (spell, SpellId) => {
                spellsWithId.push({ ...spell, SpellId })
            });

            return dispatch(setSpells(spellsWithId));
        }
    ).catch(
        error => console.log(error)
    );
};

export { getSpells }
