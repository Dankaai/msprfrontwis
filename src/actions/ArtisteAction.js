import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getArtistes() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/artiste`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_ARTISTES_SUCCESS,
                artistes: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}

