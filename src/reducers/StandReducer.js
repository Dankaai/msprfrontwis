import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.stands, action) {
	switch (action.type) {
		case types.GET_STANDS_SUCCESS:
			return action.stands;
		default:
			return state;
	}
}