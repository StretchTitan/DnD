const prefix = 'SPELLS';

const setSpells = (spells) => ({
	type: `${prefix}_SET`,
	spells
});

export { setSpells };
