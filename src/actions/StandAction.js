import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getstands() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/stand`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_STANDS_SUCCESS,
                stands: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}

