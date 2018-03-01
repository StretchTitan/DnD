const prefix = 'LOGIN',
    initialState = {
		isLoggedIn: false,
		username: 'christopher.breit0000@gmail.com',
		password: 'tester123'
    };

export default LoginReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case `${prefix}_SET`:
			return {
				...state,
				isLoggedIn: action.isLoggedIn
			};
		case `${prefix}_HANDLE_CREDS`:
			return {
				...state,
				[action.field]: action.value
			}
		default:
			return state;
	}
}
