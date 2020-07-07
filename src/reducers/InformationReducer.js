import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.informations, action) {
	switch (action.type) {
		case types.GET_INFORMATIONS_SUCCESS:
			return action.informations;
		default:
			return state;
	}
}