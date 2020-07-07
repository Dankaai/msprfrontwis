import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getScenes() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/scene`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_SCENES_SUCCESS,
                scenes: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}

