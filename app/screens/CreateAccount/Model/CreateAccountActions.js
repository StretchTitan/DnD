const prefix = 'CREATE_ACCOUNT';

const handleAccountInfo = (field, value) => ({ 
	type: `${prefix}_HANDLE_ACCOUNT_INFO`,
	payload: {
        field: value
    }
});

export { handleAccountInfo }