import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getBuvettes() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/buvette`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_BUVETTES_SUCCESS,
                buvettes: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}
