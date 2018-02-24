import axios from 'axios';

export const apiCall = ({ method, url, data = {}, success, error = false }) => {
    return (dispatch, getState) => {
        const fetchParams = { url, method, data, success, error };

        return dispatch(executeAPICall(fetchParams));

        axios({ method, url, data }).then(
            response => dispatch(success(response))
        ).catch(
            e => dispatch(error(e))
        );
    };
};
