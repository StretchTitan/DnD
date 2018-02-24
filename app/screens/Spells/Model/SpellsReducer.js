const prefix = 'SPELLS',
    initialState = {
        spells: [{
            name: "What",
            desc: "Happy Scrappy Hero Pup"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "What",
            desc: "Happy Scrappy Hero Pup"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }, {
            name: "Who",
            desc: "Word up to ya mother"
        }]
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
