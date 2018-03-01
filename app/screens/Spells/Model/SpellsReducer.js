const prefix = 'SPELLS',
    initialState = {
        spells: []
    };

export default SpellsReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case `${prefix}_SET`:
			return {
				...state,
				spells: action.spells
			};
		default:
			return state;
	}
}
