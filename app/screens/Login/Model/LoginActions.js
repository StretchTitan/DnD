const prefix = 'LOGIN';

const setLogin = (isLoggedIn) => ({ 
	type: `${prefix}_SET`,
	isLoggedIn
});

const handleCreds = (field, value) => ({ 
	type: `${prefix}_HANDLE_CREDS`,
	field,
	value
});

export { setLogin, handleCreds }