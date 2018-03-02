const prefix = 'CREATE_ACCOUNT',
    initialState = {
		accountInfo: {}
    };

export default CreateAccountReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case `${prefix}_HANDLE_ACCOUNT_INFO`:
			return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    ...action.payload
                }
			}
		default:
			return state;
	}
}
