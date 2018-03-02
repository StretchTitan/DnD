import firebase from 'react-native-firebase';
import spellsToSeed from './json_payloads/spells';


export default seedSpells = () => {
    const db = firebase.database(),
        spellsRef = db.ref('/spells');

    spellsToSeed.map(spell => {
        const newSpellRef = spellsRef.push();
        
        newSpellRef.set(spell)
    });
}