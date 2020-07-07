import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.buvettes, action) {
	switch (action.type) {
		case types.GET_BUVETTES_SUCCESS:
			return action.buvettes;
		default:
			return state;
	}
}