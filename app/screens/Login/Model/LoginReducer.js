const prefix = 'LOGIN',
    initialState = {
		isLoggedIn: false,
		UserName: '',
		Password: ''
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
