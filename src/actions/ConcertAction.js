import axios from 'axios';

import Constants from '../constants/Constants';
import *  as types from '../constants/ActionTypes';


export function getConcerts() {
    return (dispatch) => {
        const url = `${Constants.URL.wc}/concert`
        
        return axios.get(url).then(response => {
            dispatch({
                type: types.GET_CONCERTS_SUCCESS,
                concerts: response.data
            }
        )}).catch(err => {
            console.log(err.error);
        })
    };
}