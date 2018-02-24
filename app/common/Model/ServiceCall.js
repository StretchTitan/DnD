import axios from 'axios';
import { has, assign } from 'lodash';

export const apiCall = ({ method, url, data = {}, success, error = false, acceptType = 'application/json', headers = {}}) => {
    return (dispatch, getState) => {
        const contentType = method === 'GET' || method === 'DELETE' ? undefined : 'application/json';

        const headersBase = {
            Accept: acceptType,
            // AccessToken: sessionStorage.token,
            'Content-Type': contentType,
        };

        const fetchParams = {
            url,
            method,
            headers: assign(headersBase, headers),
            data,
            success,
            error
        };

        return dispatch(executeAPICall(fetchParams));
    };
};

const executeAPICall = ({ method, url, data, headers, success, error }) => {
    return (dispatch, getState) => {
        const httpRequest = axios({ method, url, data, headers }).then((data) => {
            const headers = data.headers ? data.headers.location : false,
                responseData = data.data.Data || headers ? { Data: data.data.Data, Headers: data.headers } : data.data;

            dispatch(success(responseData));
        }).catch((err) => {
            const e = has(err, 'response.data') ? err.response.data : err;

            console.error(e);;
        });
    };
};
