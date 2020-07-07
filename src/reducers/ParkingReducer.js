import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.parkings, action) {
	switch (action.type) {
		case types.GET_PARKINGS_SUCCESS:
			return action.parkings;
		default:
			return state;
	}
}