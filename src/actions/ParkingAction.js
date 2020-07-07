import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getParkings() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/parking`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_PARKINGS_SUCCESS,
                parkings: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}

