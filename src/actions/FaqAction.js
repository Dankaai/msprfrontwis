import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';

export function getFaq() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/faq`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_FAQ_SUCCESS,
                faqs: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}

