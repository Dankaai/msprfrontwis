import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getBoutiques() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/boutique`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_BOUTIQUES_SUCCESS,
                boutiques: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}