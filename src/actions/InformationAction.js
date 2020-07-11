import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getInformations() {
    return (dispatch) => {
        const url = `http://localhost/msprfront/information`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_INFORMATIONS_SUCCESS,
                informations: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}

